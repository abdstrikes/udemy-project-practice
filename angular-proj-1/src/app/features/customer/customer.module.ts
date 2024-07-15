import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DirectiveModule } from 'src/app/shared/directives/directive.module';


@NgModule({
  declarations: [CustomerComponent, CustomerViewComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatTableModule,
    RouterModule,
    DirectiveModule
  ],
  exports:[CustomerComponent,CustomerViewComponent]
})
export class CustomerModule { }
