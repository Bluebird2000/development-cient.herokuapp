import { CategoryComponent } from './pages/category/category.component';
import { ViewForumComponent } from './pages/view-forum/view-forum.component';
import { AddForumComponent } from './pages/add-forum/add-forum.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { UsersComponent } from './pages/users/users.component';
import { AdminComponent } from './pages/admin/admin.component';
import { Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { AdminGuard } from '../../core/guard/admin.guard';


export const DashboardLayoutRoutes: Routes = [
  {
    path: 'dashboard', component: AdminComponent
  },
  {
    path: 'users', component: UsersComponent, canActivate: [AdminGuard]
  },
  {
    path: 'users/:userId', component: ViewUserComponent, canActivate: [AdminGuard]
  },
  {
    path: 'forums/add', component: AddForumComponent
  },
  {
    path: 'forums', component: ViewForumComponent
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'category/add', component: AddCategoryComponent
  }
];

