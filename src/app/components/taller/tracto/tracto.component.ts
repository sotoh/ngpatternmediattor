import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria, TallerLugar } from 'src/app/models/models';

@Component({
  selector: 'app-tracto',
  templateUrl: './tracto.component.html',
  styleUrls: ['./tracto.component.css'],
})
export class TractoComponent implements OnInit, OnChanges {
  @Input() category!: Categoria[];
  @Input() incomingForm: any;
  @Input() workship!: TallerLugar[];
  @Input() first!: boolean;
  failureTcForm!: FormGroup;
  submitted: boolean = false;
  workshipSubmitted: boolean = false;

  constructor(private formbuilder: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category']) {
      if (changes['category'].currentValue) {
        this.category = this.category.filter(
          (obj) =>
            obj.presencia === 1 || obj.presencia === 2 || obj.presencia === 7
        );
      }
    }
  }

  ngOnInit(): void {
    this.submitted = this.workshipSubmitted = false;
    this.failureTcForm = this.formbuilder.group({
      tcfailure: ['', Validators.required],
      tcoutWorking: [false],
      tcWorkship: ['', Validators.required],
      tcMtto: [false],
      tctype: ['', Validators.required],
      dynamicfailures: this.formbuilder.array([]),
    });
    if (this.incomingForm) {
      let dynamicWorkship = false;
      if (this.incomingForm.tcMtto) {
        // Si es preventivo
        this.incomingForm.tcfailure = '';
        this.incomingForm.tctype = '';
        this.incomingForm.tcoutWorking = true;
        /*if (!this.failureTcForm.controls['tcoutWorking'].value) {
          this.incomingForm.tcWorkship = '';
        }*/
        if (this.incomingForm.dynamicfailures.length > 0) {
          for (const {} of this.incomingForm.dynamicfailures) {
            this.addControls();
          }
        }
        this.failureTcForm.setValue(this.incomingForm);
        this.failureTcForm.controls['tcfailure'].disable();
        this.failureTcForm.controls['tctype'].disable();
        this.failureTcForm.controls['tcoutWorking'].disable();
      } else {
        if (this.incomingForm.dynamicfailures.length > 0) {
          for (const iterator of this.incomingForm.dynamicfailures) {
            this.addControls();
            if (iterator.dynamicoutWorking) {
              dynamicWorkship = true;
            }
          }
        }
        if (!this.incomingForm.tcoutWorking && !dynamicWorkship) {
          this.incomingForm.tcWorkship = '';
        }
        this.failureTcForm.setValue(this.incomingForm);
      }
    }
  }

  public get forms(): FormGroup['controls'] {
    return this.failureTcForm.controls;
  }

  public get dynamicForms(): FormArray {
    return this.failureTcForm.get('dynamicfailures') as FormArray;
  }

  public get dynamicControls(): FormGroup[] {
    return this.dynamicForms.controls as FormGroup[];
  }

  addControls(): void {
    this.dynamicForms.push(this.tc);
    this.submitted = false;
  }

  preventive(): void {
    if (!this.failureTcForm.controls['tcMtto'].value) {
      this.failureTcForm.controls['tcfailure'].enable();
      this.failureTcForm.controls['tctype'].enable();
      this.failureTcForm.controls['tcoutWorking'].reset();
      this.failureTcForm.controls['tcoutWorking'].enable();
      this.failureTcForm.controls['tcWorkship'].reset();
    } else {
      this.failureTcForm.controls['tcfailure'].reset();
      this.failureTcForm.controls['tctype'].reset();
      this.failureTcForm.controls['tcfailure'].disable();
      this.failureTcForm.controls['tctype'].disable();
      this.failureTcForm.controls['tcoutWorking'].setValue(true);
      this.failureTcForm.controls['tcoutWorking'].disable();
      this.workshipSubmitted = false;
      this.failureTcForm.controls['tcWorkship'].reset();
    }
  }

  private get tc(): FormGroup {
    return this.formbuilder.group({
      dynamicfailure: ['', Validators.required],
      dynamicoutWorking: [false],
      dynamictype: ['', Validators.required],
    });
  }

  onSubmit(): boolean {
    this.submitted = true;
    this.workshipSubmitted = false;
    if (this.dynamicControls.length !== 0) {
      this.dynamicControls.forEach((element) => {
        // console.log(element.controls['dynamicoutWorking'].value);
        if (element.controls['dynamicoutWorking'].value) {
          this.workshipSubmitted = true;
          this.failureTcForm.controls['tcWorkship'].markAsDirty();
        }
      });
      if (this.workshipSubmitted) {
        if (this.failureTcForm.invalid) {
          return false;
        }
        return true;
      }
    }
    if (!this.failureTcForm.controls['tcoutWorking'].value) {
      // Valida todo menos taller
      if (
        (this.failureTcForm.controls['tcfailure'].status === 'INVALID' &&
          this.failureTcForm.controls['tctype'].status === 'INVALID') ||
        this.failureTcForm.controls['dynamicfailures'].status === 'INVALID'
      ) {
        return false;
      }
      return true;
    } else {
      // Valida todo, junto con taller
      this.workshipSubmitted = true;
      if (this.failureTcForm.invalid) {
        this.failureTcForm.controls['tcWorkship'].markAsDirty();
        return false;
      }
      return true;
    }
  }

  clear(): void {
    if (!this.failureTcForm.controls['tcWorkship'].value) {
      this.workshipSubmitted = false;
      this.failureTcForm.controls['tcWorkship'].reset();
    }
  }

  clearComponent(): void {
    this.submitted = this.workshipSubmitted = false;
    this.failureTcForm.reset();
    this.preventive();
  }

  removeControls(i: number): void {
    this.dynamicForms.removeAt(i);
    this.submitted = false;
    // this.dynamicForms.reset();
  }
}
