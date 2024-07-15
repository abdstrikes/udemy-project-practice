import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { StructDirectivesDemoComponent } from './struct-directives-demo/struct-directives-demo.component';
import { CustomDirectivesDemoComponent } from './custom-directives-demo/custom-directives-demo.component';
import { DirectiveModule } from 'src/app/shared/directives/directive.module';
import { ParentDemoComponent } from './parent-demo/parent-demo.component';
import { ChildDemoComponent } from './child-demo/child-demo.component';


@NgModule({
  declarations: [
    StructDirectivesDemoComponent,
    CustomDirectivesDemoComponent,
    ParentDemoComponent,
    ChildDemoComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    DirectiveModule
  ]
})
export class ExamplesModule { }
