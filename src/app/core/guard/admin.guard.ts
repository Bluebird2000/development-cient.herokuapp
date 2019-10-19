import { AuthService } from '../../service/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) {}

    canActivate() {
        if (this.authenticationService.isAdmin) {
            return true;
        } else {
            this.router.navigate(AuthService.accessDeniedRoute);
            return false;
        }
    }

    canActivateChild() {
      if (this.authenticationService.isAdmin) {
          return true;
      } else {
        this.router.navigate(AuthService.accessDeniedRoute);
        return false;
      }
    }
}
