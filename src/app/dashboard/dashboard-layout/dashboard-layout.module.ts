import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutes } from './dashboard-layout-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardLayoutRoutes)
  ]
})
export class DashboardLayoutModule { }