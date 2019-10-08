import { AdminComponent } from './pages/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const DashboardLayoutRoutes: Routes = [
  {
    path: 'dashboard', component: AdminComponent
  }
];

