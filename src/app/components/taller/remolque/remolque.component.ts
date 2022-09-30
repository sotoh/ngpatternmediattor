import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria, TallerLugar } from 'src/app/models/models';

@Component({
  selector: 'app-remolque',
  templateUrl: './remolque.component.html',
  styleUrls: ['./remolque.component.css']
})
export class RemolqueComponent implements OnInit, OnChanges {
  @Input() category!: Categoria[];
  @Input() incomingForm: any;
  @Input() workship!: TallerLugar[];
  @Input() selectedWorkship: TallerLugar | undefined;
  @Input() first!: boolean;
  failuresForm!: FormGroup;
  submitted: boolean = false;
  workshipSubmitted: boolean = false;

  constructor(private formbuilder: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category']) {
      if (changes['category'].currentValue) {
        this.category = this.category.filter((obj) =>
          obj.presencia === 1 ||
          obj.presencia === 3 ||
          obj.presencia === 6 ||
          obj.presencia === 7
        );
      }
    }
  }

  ngOnInit(): void {
    this.failuresForm = this.formbuilder.group({
      srfailure: ['', Validators.required],
      sroutWorking: [false],
      workship: ['', Validators.required],
      srtype: ['', Validators.required],
      dynamicfailures: this.formbuilder.array([])
    });
    if (this.incomingForm) {
      let dynamicWorkship = false;
      if (this.incomingForm.dynamicfailures.length > 0 ) {
        for (const iterator of this.incomingForm.dynamicfailures) {
          this.addForms();
          if (iterator.dynamicoutWorking) {
            dynamicWorkship = true;
          }
        }
      }
      if (this.selectedWorkship) {
        this.incomingForm.workship = this.selectedWorkship;
      }

      if (!this.incomingForm.sroutWorking && !dynamicWorkship) {
        this.incomingForm.workship = '';
      }
      this.failuresForm.setValue(this.incomingForm);
      // this.failuresForm.controls['workship'].disable();
    }
    if (this.selectedWorkship) {
      this.failuresForm.controls['workship'].setValue(this.selectedWorkship);
      this.failuresForm.controls['workship'].disable();
    } else {
      this.failuresForm.controls['workship'].reset();
    }
  }

  public get forms(): FormGroup['controls'] {
    return this.failuresForm.controls;
  }

  private get dynamicForms(): FormArray {
    return this.failuresForm.get('dynamicfailures') as FormArray;
  }

  public get dynamicControls(): FormGroup[] {
    return this.dynamicForms.controls as FormGroup[];
  }

  addForms(): void {
    this.dynamicForms.push(this.sr);
    this.submitted = this.workshipSubmitted = false;
  }

  removeForm(i: number): void {
    this.dynamicForms.removeAt(i);
    this.submitted = this.workshipSubmitted = false;
  }

  clearComponent(): void {
    this.submitted = this.workshipSubmitted = false;
    this.failuresForm.controls['dynamicfailures'] = this.formbuilder.array([]);
    this.failuresForm.reset();
  }

  onSubmit(): boolean {
    this.submitted = true;
    this.workshipSubmitted = false;
    if (this.dynamicControls.length !== 0) {
      this.dynamicControls.forEach(element => {
          if (element.controls['dynamicoutWorking'].value) {
            this.workshipSubmitted = true;
          }
      });
      if (this.workshipSubmitted) {
        if (this.failuresForm.invalid) {
          return false;
        }
        return true;
      }
    }
    if (!this.failuresForm.controls['sroutWorking'].value) {
      // valida todo menos taller
      if (this.failuresForm.controls['srfailure'].status === 'INVALID' &&
        this.failuresForm.controls['srtype'].status === 'INVALID' ||
        this.failuresForm.controls['dynamicfailures'].status === 'INVALID') {
          return false;
        }
        return true;
    } else {
      this.workshipSubmitted = true;
      if (this.failuresForm.invalid) {
        return false;
     }
     return true;
    }
   }

   private get sr(): FormGroup {
    return this.formbuilder.group({
      dynamicfailure: ['', Validators.required],
      dynamicoutWorking: [false],
      dynamictype: ['', Validators.required]
    });
  }

}
