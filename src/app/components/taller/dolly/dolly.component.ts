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
  selector: 'app-dolly',
  templateUrl: './dolly.component.html',
  styleUrls: ['./dolly.component.css'],
})
export class DollyComponent implements OnInit, OnChanges {
  @Input() category!: Categoria[];
  @Input() incomingForm: any;
  @Input() workship!: TallerLugar[];
  @Input() selectedWorkship!: TallerLugar | undefined;
  @Input() first!: boolean;
  failuresForm!: FormGroup;
  submitted!: boolean;
  workshipSubmitted!: boolean;

  constructor(private formbuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category']) {
      if (changes['category'].currentValue) {
        this.category = this.category.filter(
          (obj) =>
            obj.presencia === 1 ||
            obj.presencia === 4
        );
      }
    }
  }

  ngOnInit(): void {
    this.failuresForm = this.formbuilder.group({
      dfailure: ['', Validators.required],
      workship: ['', Validators.required],
      doutWorking: [false],
      dtype: ['', Validators.required],
      dynamicfailures: this.formbuilder.array([]),
    });
    if (this.incomingForm) {
      let dynamicWorkship = false;
      if (this.incomingForm.dynamicfailures.length > 0) {
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
      if (!this.incomingForm.doutWorking && !dynamicWorkship) {
        this.incomingForm.workship = '';
      }
      this.failuresForm.setValue(this.incomingForm);
      // this.failuresForm.controls['workship'].disable();
    }
    if (this.selectedWorkship) {
      this.failuresForm.controls['workship'].setValue(this.selectedWorkship);
      this.failuresForm.controls['workship'].disable();
    }
  }

  get forms(): FormGroup['controls'] {
    return this.failuresForm.controls;
  }

  private get dynamicForms(): FormArray {
    return this.failuresForm.get('dynamicfailures') as FormArray;
  }

  public get dynamicControls(): FormGroup[] {
    return this.dynamicForms.controls as FormGroup[];
  }

  addForms(): void {
    this.dynamicForms.push(this.d);
    this.submitted = this.workshipSubmitted = false;
  }

  private get d(): FormGroup {
    return this.formbuilder.group({
      dynamicfailure: ['', Validators.required],
      dynamicoutWorking: [false],
      dynamictype: ['', Validators.required],
    });
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
    // stop here if form is invalid
    if (this.dynamicControls.length !== 0) {
      this.dynamicControls.forEach((element) => {
        // console.log(element.controls['dynamicoutWorking'].value);
        if (element.controls['dynamicoutWorking'].value) {
          this.workshipSubmitted = true;
          this.failuresForm.controls['workship'].markAsDirty();
        }
      });
      if (this.workshipSubmitted) {
        if (this.failuresForm.invalid) {
          return false;
        }
        return true;
      }
    }
    if (!this.failuresForm.controls['doutWorking'].value) {
      this.workshipSubmitted = false;
      if (
        (this.failuresForm.controls['dfailure'].status === 'INVALID' &&
          this.failuresForm.controls['dtype'].status === 'INVALID') ||
        this.failuresForm.controls['dynamicfailures'].status === 'INVALID'
      ) {
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
}
