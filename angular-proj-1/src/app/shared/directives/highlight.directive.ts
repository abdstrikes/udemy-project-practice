import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  constructor(private el:ElementRef) { }

  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor =color;
  }

}
