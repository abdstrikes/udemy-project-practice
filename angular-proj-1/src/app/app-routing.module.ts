import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { features } from 'process';
import { CustomerModule } from './features/customer/customer.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DashboardModule } from './features/dashboard/dashboard.module';

const routes: Routes = [
  {
  path: 'dashboard' ,
  loadChildren:()=>import('./features/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
  path: 'customer',
  loadChildren:()=>import('./features/customer/customer.module').then(m=>m.CustomerModule)
  },
  {
    path: 'examples',
    loadChildren:()=>import('./features/examples/examples.module').then(m=>m.ExamplesModule)
    },
  {
    path: '' ,
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
