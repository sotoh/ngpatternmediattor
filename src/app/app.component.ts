import { Component } from '@angular/core';
import { WorkshipoperationService } from './components/taller/workshipoperation.service';
import { Status } from './models/models';
import { SourceService } from './source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ndmediatorpattern';
  display: boolean = false;
  terminal = "Sample";
  tableLength = 15;
  status!: Status[];
  loading: boolean = false;
  constructor(
    private workshipOperationService: WorkshipoperationService,
    private source: SourceService
  ) {
    this.status = this.source.MainTable();
  }

  openForWorkship(tc: number, sr1: number, d: number, sr2: number): void {
    this.workshipOperationService.sendData({
      unidad: tc,
      remolque_uno: sr1,
      dolly: d,
      remolque_dos: sr2,
      mode: 1,
    });
    this.workshipOperationService.openDialog();
  }
}
