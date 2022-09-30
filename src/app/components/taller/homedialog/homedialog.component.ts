import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { DollyComponent } from '../dolly/dolly.component';
import { RemolqueComponent } from '../remolque/remolque.component';
import { TractoComponent } from '../tracto/tracto.component';
import {
  Categoria,
  ContainerForm,
  TallerLugar,
  TractoForm,
  DollyForm,
  Flota,
} from 'src/app/models/models';
import { RemolqueDosComponent } from '../remolque-dos/remolque-dos.component';

import { first } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { SourceService } from 'src/app/source.service';

@Component({
  selector: 'app-homedialog',
  templateUrl: './homedialog.component.html',
  styleUrls: ['./homedialog.component.css'],
  providers: [MessageService],
})
export class HomedialogComponent implements OnInit, OnChanges {
  @Input() data!: Flota;
  @Output() loadingEmiter = new EventEmitter<boolean>();
  @Output() closeEvent = new EventEmitter<boolean>();
  @ViewChild(DollyComponent) dollyChild!: DollyComponent;
  @ViewChild(RemolqueComponent) srOneChild!: RemolqueComponent;
  @ViewChild(RemolqueDosComponent) srTwoChild!: RemolqueDosComponent;
  @ViewChild(TractoComponent) tcChild!: TractoComponent;
  // Nested Modal Variables
  displayNested: boolean = false;
  outerLoading: boolean = false;
  // Nested Modal Variables
  output!: { view: number, show: boolean };
  options!: number;
  setup!: MenuItem[];
  step!: number;
  loadingHome: boolean = false;
  backButton: boolean = false;
  text!: string;
  hidden: boolean = false;
  lastStep: boolean = false;
  tractoValues: TractoForm | undefined;
  remolqueOneValues: ContainerForm | undefined;
  remolqueTwoValues: ContainerForm | undefined;
  dollyValues: DollyForm | undefined;
  categories!: Categoria[];
  workships!: TallerLugar[];
  selectedWorkship: TallerLugar | undefined;
  items!: MenuItem[];
  private truck!: number;
  private containerOne!: number;
  private d!: number;
  private containerTwo!: number;
  /** value sirve para indicar cuales van a estar presentes,
   * number para marcar la cardinalidad (ascendete)
   * save para indicar si ese punto esta guardado
   */
  private preStep: Array<{
    value: boolean,
    step?: number,
    save?: boolean
  }> = [];
  private counter: number = 0;
  private firstStart: number | undefined;
  constructor(
    private cd: ChangeDetectorRef,
    private source: SourceService
  ) {
    this.categories = this.source.Types();
    this.workships = this.source.Workships();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].currentValue) {
      this.prepareData(changes['data'].currentValue);
    }
  }

  loadingEvent($event: any): void {
    this.outerLoading = $event;
  }

  closeDialog(): void {
    this.output = { view: this.options, show: false };
  }

  ngOnInit(): void {
    this.text = 'Omitir';
    this.preStep = [
      { value: true, step: 1, save: false },
      { value: true, step: 2, save: false },
      { value: true, step: 3, save: false },
      { value: true, step: 4, save: false },
      { value: true, step: 5, save: false },
    ];
    this.outerLoading = true;
    this.items = [
      {
        label: 'Nuevo Taller',
        command: () => {
          this.showModalDialog(1);
        },
      },
      { separator: true },
      {
        label: 'Nueva Categoria Falla',
        command: () => {
          this.showModalDialog(2);
        },
      },
    ];

  }

  public get steps(): { value: boolean, step?: number, save?: boolean }[] {
    return this.preStep;
  }

  showModalDialog(option: number): void {
    this.displayNested = true;
    this.options = option;
  }

  /**
   * Omite hasta guardar la Falla
   */
  skip(): void {
    switch (true) {
      // Guarda cada Formulario
      case this.truck && this.steps[0].step === this.step:
        {
          if (this.steps[0].step === this.firstStart) {
            this.selectedWorkship = undefined;
          }
          this.tractoValues = undefined;
        }
        break;
      case this.containerOne && this.steps[1].step === this.step:
        {
          if (this.preStep[1].save) {
            this.firstStart = -1;
            this.remolqueOneValues = this.selectedWorkship = undefined;
            this.preStep[1].save = false;
          }
        }
        break;
      case this.dollyValues && this.steps[2].step === this.step:
        {
          if (this.preStep[2].save) {
            this.firstStart = -1;
            this.dollyValues = this.selectedWorkship = undefined;
            this.preStep[2].save = false;
          }
        }
        break;
      case this.containerTwo && this.steps[3].step === this.step:
        {
          if (this.preStep[3].save) {
            this.firstStart = -1;
            this.remolqueTwoValues = this.selectedWorkship = undefined;
            this.preStep[3].save = false;
          }
        }
        break;
    }
    if (this.step === this.counter - (this.counter - 1) && this.counter !== 3) {
      // Primero
      this.backButton = true;
      this.step++;
    } else {
      // No es primero ni ultimo
      if (!this.lastStep) {
        this.hidden = false;
        this.step++;
        if (this.step === this.counter - 1) {
          // Ultimo Paso
          this.hidden = this.lastStep = true;
          this.text = 'Guardar';
        }
      } else {
        if (this.tractoValues) {
          this.tractoValues.truck = this.truck;
        }
        if (this.remolqueOneValues) {
          this.remolqueOneValues.container = this.containerOne;
        }
        if (this.dollyValues) {
          this.dollyValues.dolly = this.d;
        }
        if (this.remolqueTwoValues) {
          this.remolqueTwoValues.container = this.containerTwo;
        }
        this.loadingHome = true;
        // Notifica que esta cargando para no cerrar
        this.loadingEmiter.emit(false);
        setTimeout(() => {this.onClose(), 3000});
      }
    }
  }

  /**
   * Boton para guardar, avanzar
   */
  save(): void {
    switch (true) {
      // Guarda cada Formulario
      case this.truck && this.steps[0].step === this.step:
        {
          if (this.tcChild.onSubmit()) {
            this.tractoValues = this.tcChild.failureTcForm.getRawValue();
            this.preStep[0].save = true;
            if (this.firstStart === -1) {
              this.firstStart = this.steps[0].step;
              this.selectedWorkship =
                this.tcChild.failureTcForm.controls['tcWorkship'].value;
            }
            this.nextStep();
          }
        }
        break;
      case this.containerOne && this.steps[1].step === this.step:
        {
          if (this.srOneChild.onSubmit()) {
            this.remolqueOneValues = this.srOneChild.failuresForm.getRawValue();
            this.preStep[1].save = true;
            if (this.firstStart === -1) {
              this.firstStart = this.steps[1].step;
              this.selectedWorkship =
                this.srOneChild.failuresForm.controls['workship'].value;
            }
            this.nextStep();
          }
        }
        break;
      case this.d && this.steps[2].step === this.step:
        {
          if (this.dollyChild.onSubmit()) {
            this.dollyValues = this.dollyChild.failuresForm.getRawValue();
            this.preStep[2].save = true;
            if (this.firstStart === -1) {
              this.firstStart = this.steps[2].step;
              this.selectedWorkship =
                this.dollyChild.failuresForm.controls['workship'].value;
            }
            this.nextStep();
          }
        }
        break;
      case this.containerTwo && this.steps[3].step === this.step:
        {
          if (this.srTwoChild.onSubmit()) {
            this.remolqueTwoValues = this.srTwoChild.failuresForm.getRawValue();
            this.preStep[3].save = true;
            if (this.firstStart === -1) {
              this.firstStart = this.steps[3].step;
              this.selectedWorkship =
                this.srTwoChild.failuresForm.controls['workship'].value;
            }
            this.nextStep();
          }
        }
        break;
    }
  }

  back(): void {
    if (this.step === this.counter - (this.counter - 1) + 1) {
      // Es el primero
      this.backButton = false;
      this.step = 1;
    } else {
      // Intermediario
      this.hidden = false;
      this.lastStep = false;
      this.text = 'Omitir';
      this.step--;
    }
  }

  cancelActions(): void {
    this.firstStart = -1;
    this.lastStep = false;
    this.loadingHome = false;
    this.backButton = true;
    this.tractoValues =
      this.dollyValues =
      this.remolqueOneValues =
      this.remolqueTwoValues =
      this.selectedWorkship =
        undefined;
    if (this.tcChild) {
      this.tcChild.clearComponent();
    }
    if (this.srOneChild) {
      this.srOneChild.clearComponent();
    }
    if (this.dollyChild) {
      this.dollyChild.clearComponent();
    }
    if (this.srTwoChild) {
      this.srTwoChild.clearComponent();
    }
  }

  private actionsOnClose(): void {
    this.backButton = this.hidden = false;
    this.text = 'Omitir';
  }

  private prepareData(data: Flota): void {
    this.counter = this.step = 1;
    this.firstStart = -1;
    this.preStep = [];
    this.actionsOnClose();
    this.setup = [];
    if (data.unidad) {
      this.truck = data.unidad;
      if (data.unidad > 9) {
        this.setup.push({ label: `TC-${this.truck}` });
      } else {
        this.setup.push({ label: `TC-0${this.truck}` });
      }
      this.preStep.push({ value: true });
    } else {
      this.preStep.push({ value: false });
    }
    if (data.remolque_uno) {
      this.containerOne = data.remolque_uno;
      if (data.remolque_uno > 9) {
        this.setup.push({ label: `SR1-${this.containerOne}` });
      } else {
        this.setup.push({ label: `SR1-0${this.containerOne}` });
      }
      this.preStep.push({ value: true });
    } else {
      this.preStep.push({ value: false });
    }
    if (data.dolly) {
      this.d = data.dolly;
      if (data.dolly > 9) {
        this.setup.push({ label: `D-${this.d}` });
      } else {
        this.setup.push({ label: `D-0${this.d}` });
      }
      this.preStep.push({ value: true });
    } else {
      this.preStep.push({ value: false });
    }
    if (data.remolque_dos) {
      this.containerTwo = data.remolque_dos;
      if (data.remolque_dos > 9) {
        this.setup.push({ label: `SR2-${this.containerTwo}` });
      } else {
        this.setup.push({ label: `SR2-0${this.containerTwo}` });
      }
      this.preStep.push({ value: true });
    } else {
      this.preStep.push({ value: false });
    }
    this.preStep.push({ value: true }); // Este es para el Finalizar
    this.preStep.forEach((element) => {
      if (element.value) {
        element.step = this.counter++;
      } else {
        element.step = 0;
      }
    });
    this.setup.push({ label: 'Finalizar' });
    this.cd.detectChanges();
  }

  private nextStep(): void {
    if (this.step === this.counter - (this.counter - 1) && this.counter !== 3) {
      // Primero
      this.backButton = true;
      this.step++;
    } else {
      // No es primero ni ultimo
      this.hidden = false;
      this.step++;
      if (this.step === this.counter - 1) {
        // Ultimo Paso
        this.hidden = this.lastStep = true;
        this.text = 'Guardar';
      }
    }
  }

  /**
   * Acciones cuando se cierra el componente
   */
  private onClose(): void {
    this.firstStart = -1;
    this.lastStep = false;
    this.loadingHome = false;
    this.backButton = true;
    this.loadingEmiter.emit(true);
    this.closeEvent.emit(true);
    this.tractoValues =
      this.dollyValues =
      this.remolqueOneValues =
      this.remolqueTwoValues =
      this.selectedWorkship =
        undefined;
    if (this.tcChild) {
      this.tcChild.clearComponent();
    }
    if (this.srOneChild) {
      this.srOneChild.clearComponent();
    }
    if (this.dollyChild) {
      this.dollyChild.clearComponent();
    }
    if (this.srTwoChild) {
      this.srTwoChild.clearComponent();
    }
  }
}
