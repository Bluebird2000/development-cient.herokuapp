import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './signUp/signUp.component';
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { ThankYouComponent } from './thankYou/thankYou.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NotFoundComponent } from './notFound/notFound.component';

export const SessionRoutes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},{
  path: '',
  children: [{
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'reset-password/:id',
    component: ResetPasswordComponent
  },
  {
    path: 'confirmation/:token',
    component: ConfirmationComponent
  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }]
}];