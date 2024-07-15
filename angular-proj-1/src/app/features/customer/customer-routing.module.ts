import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: "",
    component: CustomerComponent
  },
  {
    path: "list",
    component: CustomerViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
