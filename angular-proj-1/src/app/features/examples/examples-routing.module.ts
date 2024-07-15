import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { CustomDirectivesDemoComponent } from './custom-directives-demo/custom-directives-demo.component';
import { ParentDemoComponent } from './parent-demo/parent-demo.component';
import { StructDirectivesDemoComponent } from './struct-directives-demo/struct-directives-demo.component';

const routes: Routes = [
  {
    path: 'directive',
    component: StructDirectivesDemoComponent
  },
  {
    path: 'custom-directive',
    component: CustomDirectivesDemoComponent
  },
  {
    path: 'parent',
    component: ParentDemoComponent
  },
  {
    path: 'child',
    component: ChildDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
