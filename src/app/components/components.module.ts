import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { BasicinputModule } from 'src/app/shared/basicinput/basicinput.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { TabViewModule } from 'primeng/tabview';
import { TalleresModule } from './taller/talleres.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DropdownModule,
    SidebarModule,
    CardModule,
    BasicinputModule,
    TableModule,
    DialogModule,
    OverlayPanelModule,
    ContextMenuModule,
    RadioButtonModule,
    CheckboxModule,
    PanelModule,
    TooltipModule,
    TabViewModule,
    FieldsetModule,
    TalleresModule,
    ProgressBarModule,
    ReactiveFormsModule,
  ],
  exports: [TalleresModule],
})
export class ComponentsModule {}
