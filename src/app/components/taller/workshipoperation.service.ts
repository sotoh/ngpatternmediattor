import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Flota } from 'src/app/models/models';

@Injectable({
  providedIn: 'root',
})
export class WorkshipoperationService {
  public visibleStatus: Observable<boolean>;
  public visibleWorkship: Observable<boolean>;
  public data: Observable<Flota>;
  public customVisible: Observable<boolean>;
  private subjectVisibleStatus: BehaviorSubject<boolean>;
  private subjectVisibleWorkship: BehaviorSubject<boolean>;
  private subjectData: Subject<Flota>;
  private subjectCustomVisible: BehaviorSubject<boolean>;
  constructor() {
    this.subjectVisibleStatus = new BehaviorSubject<boolean>(false);
    this.visibleStatus = this.subjectVisibleStatus.asObservable();
    this.subjectVisibleWorkship = new BehaviorSubject<boolean>(false);
    this.visibleWorkship = this.subjectVisibleWorkship.asObservable();
    this.subjectData = new Subject<Flota>();
    this.data = this.subjectData.asObservable();
    this.subjectCustomVisible = new BehaviorSubject<boolean>(false);
    this.customVisible = this.subjectCustomVisible.asObservable();
  }

  openFromWorkship(): void {
    this.subjectVisibleWorkship.next(true);
  }

  closeFromWorkship(): void {
    this.subjectVisibleWorkship.next(false);
  }

  openCustom(): void {
    this.subjectCustomVisible.next(true);
  }

  closeCustom(): void {
    this.subjectCustomVisible.next(false);
  }

  openDialog(): void {
    this.subjectVisibleStatus.next(true);
  }

  closeDialog(): void {
    this.subjectVisibleStatus.next(false);
  }

  sendData(data: Flota): void {
    this.subjectData.next(data);
  }
}
