import { ViewForumComponent } from './pages/view-forum/view-forum.component';
import { AddForumComponent } from './pages/add-forum/add-forum.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { UsersComponent } from './pages/users/users.component';
import { AdminComponent } from './pages/admin/admin.component';
import { Routes } from '@angular/router';


export const DashboardLayoutRoutes: Routes = [
  {
    path: 'dashboard', component: AdminComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'users/:userId', component: ViewUserComponent
  },
  {
    path: 'forums/add', component: AddForumComponent
  },
  {
    path: 'forums', component: ViewForumComponent
  }
];

