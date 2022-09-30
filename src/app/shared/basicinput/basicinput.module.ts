import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ContainerFormatPipe } from 'src/app/formaters/container-format.pipe';
import { DateFormatPipe } from 'src/app/formaters/dateformat.pipe';
import { DateobjectPipe } from 'src/app/formaters/dateobject.pipe';
import { DollyFormatPipe } from 'src/app/formaters/dolly-format.pipe';
import { EquipmentformatterPipe } from 'src/app/formaters/equipmentformatter.pipe';
import { NodriverPipe } from 'src/app/formaters/nodriver.pipe';
import { NullformatPipe } from 'src/app/formaters/nullformat.pipe';
import { TractoFormatPipe } from 'src/app/formaters/tracto-format.pipe';
import { UnitsformatPipe } from 'src/app/formaters/unitsformat.pipe';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CapitalizecaseDirective } from 'src/app/customdirectives/capitalizecase.directive';
import { ContainercolorDirective } from 'src/app/customdirectives/containercolor.directive';

@NgModule({
  declarations: [
    ContainerFormatPipe,
    TractoFormatPipe,
    DollyFormatPipe,
    DateFormatPipe,
    NullformatPipe,
    UnitsformatPipe,
    NodriverPipe,
    CapitalizecaseDirective,
    ContainercolorDirective,
    EquipmentformatterPipe,
    DateobjectPipe,
  ],
  imports: [
    CommonModule,
    RadioButtonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
  ],
  exports: [
    ContainerFormatPipe,
    TractoFormatPipe,
    DollyFormatPipe,
    DateFormatPipe,
    NullformatPipe,
    UnitsformatPipe,
    NodriverPipe,
    CapitalizecaseDirective,
    ContainercolorDirective,
    EquipmentformatterPipe,
    DateobjectPipe,
  ],
})
export class BasicinputModule {}
