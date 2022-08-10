import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyhoverbtn]'
})
export class MyhoverbtnDirective {

  constructor(
    public el: ElementRef,
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#FED8B1', '#D9B2FF');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '');
  }

  private highlight(color: string, color2: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.background = color2;
  }

}
