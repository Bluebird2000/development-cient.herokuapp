import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutes } from './dashboard-layout-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { AddForumComponent } from './pages/add-forum/add-forum.component';
import { ViewForumComponent } from './pages/view-forum/view-forum.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './pages/category/category.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    ViewUserComponent,
    AddForumComponent,
    ViewForumComponent,
    CategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild(DashboardLayoutRoutes)
  ]
})
export class DashboardLayoutModule { }
