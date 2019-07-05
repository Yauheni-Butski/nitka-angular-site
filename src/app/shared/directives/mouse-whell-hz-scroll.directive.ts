import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[mouseWheelHzScroll]'
})
export class MouseWheelHzScrollDirective {
  @Input() scrollStep = 40;
  @Input('mouseWheelHzScroll') scrollEl: HTMLElement;

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
    event = window.event || event; // old IE support
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    if (delta > 0) {
        this.scrollElementHorizontally(delta);
    } else if (delta < 0) {
        this.scrollElementHorizontally(delta);
    }
    // for IE
    event.returnValue = false;
    // for Chrome and Firefox
    if (event.preventDefault) {
        event.preventDefault();
    }
  }

  scrollElementHorizontally(delta: number) {
    // path needed HTMLElement for scroll. by default - current element
    if (this.scrollEl) {
      this.scrollEl.scrollLeft -= (delta * this.scrollStep);
    } else {
      this.el.nativeElement.scrollLeft -= (delta * this.scrollStep);
    }
  }
}
