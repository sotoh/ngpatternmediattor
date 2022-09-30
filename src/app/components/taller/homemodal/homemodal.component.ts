import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flota } from 'src/app/models/models';
import { HomedialogComponent } from '../homedialog/homedialog.component';
import { WorkshipoperationService } from '../workshipoperation.service';

@Component({
  selector: 'app-homemodal',
  templateUrl: './homemodal.component.html',
  styleUrls: ['./homemodal.component.css'],
})
export class HomemodalComponent implements OnInit, OnDestroy {
  @ViewChild(HomedialogComponent) homeChild!: HomedialogComponent;
  display: boolean = false;
  showNdisable!: boolean;
  sendData!: Flota;
  private subOpenerStatus!: Subscription;
  private subMessages!: Subscription;
  constructor(private dialogOperation: WorkshipoperationService) {}
  ngOnDestroy(): void {
    this.subOpenerStatus.unsubscribe();
    this.subMessages.unsubscribe();
  }

  ngOnInit(): void {
    this.showNdisable = true;
    this.subOpenerStatus = this.dialogOperation.visibleStatus.subscribe((visible) => {
      this.display = visible;
    });
    this.subMessages = this.dialogOperation.data.subscribe((data) => {
      this.sendData = data;
    });
  }

  loadingEvent(event: any): void {
    this.showNdisable = event;
  }

  onClose(event: boolean): void {
    if (event) {
      this.dialogOperation.closeDialog();
      this.showNdisable = true;
      this.homeChild.cancelActions();
    }
  }
}
