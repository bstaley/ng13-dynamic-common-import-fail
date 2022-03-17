import { NgIf as _NgIf } from "@angular/common";
import { Directive, NgModule } from "@angular/core";

@Directive({ selector: '[ngIf]' })
export class NgIf<T = unknown> extends _NgIf { }

@NgModule({
  declarations: [NgIf],
  exports: [NgIf]
})
export class ReExportedModule { }
