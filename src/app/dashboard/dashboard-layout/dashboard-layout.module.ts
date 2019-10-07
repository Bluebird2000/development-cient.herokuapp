import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [DashboardLayoutComponent, AdminComponent],
  imports: [
    CommonModule,
    DashboardLayoutRoutingModule
  ]
})
export class DashboardLayoutModule { }
