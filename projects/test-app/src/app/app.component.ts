import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OtherModule } from 'projects/test-lib/src/lib/other/other.module';
import { ReExportedModule } from './reexport.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  libImports = [
    /* fails*/
     CommonModule,
    /* works */
    // ReExportedModule,
    OtherModule
  ]
}
