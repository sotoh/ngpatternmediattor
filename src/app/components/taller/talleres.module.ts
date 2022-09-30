import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TractoComponent } from './tracto/tracto.component';
import { RemolqueComponent } from './remolque/remolque.component';
import { DollyComponent } from './dolly/dolly.component';
import { HomedialogComponent } from './homedialog/homedialog.component';
import { BasicinputModule } from 'src/app/shared/basicinput/basicinput.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { StepsModule } from 'primeng/steps';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { RemolqueDosComponent } from './remolque-dos/remolque-dos.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { HomemodalComponent } from './homemodal/homemodal.component';

@NgModule({
  declarations: [TractoComponent, RemolqueComponent, DollyComponent, HomedialogComponent, RemolqueDosComponent, HomemodalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BasicinputModule,
    DropdownModule,
    StepsModule,
    ToggleButtonModule,
    InputTextModule,
    TooltipModule,
    DialogModule,
    CardModule,
    SplitButtonModule,
    ProgressBarModule
  ],
  exports: [HomemodalComponent, HomedialogComponent]
})
export class TalleresModule { }
