import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNotEmpty]'
})
export class IfNotEmptyDirective {

  @Input('appIfNotEmpty') set appIfNotEmpty(array: Array<any>) {
    if (array && array.length !== 0) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
