import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[mouseWheelHzScroll]'
})
export class MouseWheelHzScrollDirective {
  @Input() scrollStep: number = 10;

  constructor(private el: ElementRef) { }
  
  @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
    this.onMouseWheel(event);
  }

  @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
    this.onMouseWheel(event);
  }

  @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
    this.onMouseWheel(event);
  }

  onMouseWheel(event: any) {
    var event = window.event || event; // old IE support
    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    if(delta > 0) {
        this.scrollElementHorizontally(delta);
    } else if(delta < 0) {
        this.scrollElementHorizontally(delta);
    }
    // for IE
    event.returnValue = false;
    // for Chrome and Firefox
    if(event.preventDefault) {
        event.preventDefault();
    }
  }

  scrollElementHorizontally(delta: number){
    this.el.nativeElement.scrollLeft -= (delta*this.scrollStep);
  }
}
