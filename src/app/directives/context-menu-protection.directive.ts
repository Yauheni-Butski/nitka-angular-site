import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[contextMenuProtection]'
})
export class ContextMenuProtectionDirective {

  constructor() { }

  @HostListener('contextmenu', ['$event']) onContextMenu(event: MouseEvent) {
    //TODO. Может показывать сообщение в нужной точке?
    //var clientX = event.clientX;
    //var clientY = event.clientY;
    event.stopPropagation();
    event.preventDefault();
  }

}
