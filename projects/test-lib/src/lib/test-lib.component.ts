import { AfterContentInit, Component, createNgModuleRef, Injector, Input, ModuleWithProviders, NgModule, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p #example>
    </p>
  `,
  styles: [
  ]
})
export class TestLibComponent implements AfterContentInit {

  @ViewChild('example', {static: true, read: ViewContainerRef}) vcRef: ViewContainerRef = undefined as any;

  @Input() imports: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [];

  constructor(private injector: Injector) {}

  public ngAfterContentInit(): void {
    const TemplateComponent: any = Component({
      template: '<lib-other></lib-other> <div *ngIf="true">worked</div>',
    })(class {});
    const TemplateModule: any = NgModule({
      declarations: [TemplateComponent],
      imports: this.imports,
    })(class {});

    const module = createNgModuleRef(TemplateModule, this.injector);

    this.vcRef.createComponent(TemplateComponent, {ngModuleRef: module, injector: this.injector})
  }
}
