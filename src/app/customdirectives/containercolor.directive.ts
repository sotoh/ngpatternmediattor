import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appContainercolor]',
})
export class ContainercolorDirective implements OnInit {
  @Input() tipo!: string;
  @Input() adicional!: string;
  @HostBinding('style.color') color!: string;
  colors = ['black', 'peru', 'purple', 'green', 'blue'];
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    // this.el.nativeElement.classList.add(this.ttClass);
    this.change();
  }
  private change() {
    if (this.adicional) {
    } else {
      if (this.tipo) {
        switch (this.tipo) {
          case 'Refresco':
            // this.el.nativeElement.classList.add(this.colors[2]);
            this.color = this.colors[0];
            break;
          case 'Cervecero':
            this.color = this.colors[1];
            break;
          case 'Caja Seca':
            this.color = this.colors[2];
            break;
        }
      }
    }
  }
}
