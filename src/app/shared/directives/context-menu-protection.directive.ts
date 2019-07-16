import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[contextMenuProtection]'
})
export class ContextMenuProtectionDirective {
  @HostListener('contextmenu', ['$event']) onContextMenu(event: MouseEvent) {
    // TODO. Show message in needed point
    // var clientX = event.clientX;
    // var clientY = event.clientY;
    event.stopPropagation();
    event.preventDefault();
  }
}
