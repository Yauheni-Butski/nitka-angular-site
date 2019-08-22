import { Directive, Input, TemplateRef, ViewContainerRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appForTop6]'
})
export class ForTop6Directive implements OnChanges {

  private topSixItems: Array<any>;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

  @Input('appForTop6Of') set appForTopSix(items: Array<any>) {
    this.topSixItems = items !== null ? items.slice(0, 6) : [];
  }

  ngOnChanges() {
    this.viewContainer.clear();
    for (const item of this.topSixItems) {
      this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: item });
    }
  }
}
