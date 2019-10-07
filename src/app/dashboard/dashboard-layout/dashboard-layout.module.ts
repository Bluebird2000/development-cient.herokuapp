import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [DashboardLayoutComponent, AdminComponent, SidebarComponent],
  imports: [
    CommonModule,
    DashboardLayoutRoutingModule
  ]
})
export class DashboardLayoutModule { }
