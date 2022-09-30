import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appCapitalizecase]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '(ngModelChange)': 'sendOut($event)',
  },
})
export class CapitalizecaseDirective {
  @Output() updateValue: EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef) {}
  @HostListener('blur') onBlur(): void {
    if (this.el.nativeElement.value) {
      let str = this.el.nativeElement.value;
      str = str.replace(
        /\w\S*/g,
        (txt: string) =>
          txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
      this.el.nativeElement.value = str;
      this.sendOut(str);
    }
  }

  // @HostListener('keydown')

  sendOut(str: string): any {
    this.updateValue.emit(str);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostBinding('style.text-transform') value = 'capitalize';
}
