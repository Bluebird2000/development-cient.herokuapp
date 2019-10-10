import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionRoutes } from './session.routing';
import { WidgetsModule } from '../widgets/widgets.module';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signUp/signUp.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { ThankYouComponent } from './thankYou/thankYou.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NotFoundComponent } from './notFound/notFound.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes),
    WidgetsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
	  LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    ConfirmationComponent,
	  ThankYouComponent,
	  MaintenanceComponent,
	  NotFoundComponent,
  ]
})
export class SessionModule { }
