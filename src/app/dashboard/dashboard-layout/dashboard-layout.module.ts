import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutes } from './dashboard-layout-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardLayoutRoutes)
  ]
})
export class DashboardLayoutModule { }
