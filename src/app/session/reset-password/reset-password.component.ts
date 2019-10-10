import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  response;
  urlPath: string;
  responseErr;
  forgetPasswordForm: FormGroup;
  resetPasswordForm: FormGroup;
  showresend = false;
  email = '';
  disableBtn = false;
  id;
  confirmEmailErr;
  constructor(private router: Router, private authSrv: AuthService, private route: ActivatedRoute) {
    this.urlPath = this.router.url;
    if (this.urlPath.includes('reset-password')) {
      this.id = this.route.snapshot.paramMap.get('id');
    }
  }
  get password() {return this.resetPasswordForm.get('password'); }
  get confirmPassword() { return this.resetPasswordForm.get('confirmPassword'); }
  get passwordMatch() {return this.password.value !== this.confirmPassword.value; }


  ngOnInit() {
    this.resetPasswordField();
    this.forgetPasswordField();
  }

  clearErr() {
    this.responseErr = false;
  }

  resetPasswordField() {
    const password = new FormControl('', Validators.required);
    const certainPassword = new FormControl('', [CustomValidators.equalTo(password), ]);
    this.resetPasswordForm = new FormGroup({
      password,
      confirmPassword: certainPassword
    });
  }

  forgetPasswordField() {
    this.forgetPasswordForm = new FormGroup({
      username: new FormControl('', [Validators.required, CustomValidators.email]),
    });
  }

  get username() {return this.forgetPasswordForm.get('username'); }

  get getDisableState() {
    return this.forgetPasswordForm.invalid || this.disableBtn;
  }

  get getSubmitStaterResetPwd() {
    return this.resetPasswordForm.invalid || this.disableBtn;
  }

  forgetPassword() {
    if (this.forgetPasswordForm.valid) {
      this.disableBtn = true;
      this.responseErr = null;
      this.authSrv.forgetPassword(this.username.value).subscribe(
        (data: any) => {
          this.disableBtn = false;
          this.getSweetAlert('Success', 'success',  'reset password link has been sent to your email', 'forget-succes');
        }, err => {
          if (err.code === 404) {
            this.getSweetAlert('', 'warning',  err.msg || 'We were unable to find a user with that email', 'forget-fail');
          } else {
            this.responseErr = err.msg;
          }
          this.confirmEmailErr = err;
          this.disableBtn = false;
        }
      );
    }
  }

  resetPassword() {
    if (this.resetPasswordForm.valid && this.id) {
      this.responseErr = null;
      this.disableBtn = true;
      this.authSrv.resetPassword(this.password.value, this.id).subscribe(
        data => {
          this.disableBtn = true;
          this.getSweetAlert('Success', 'success',  'You have successfully change your password', 'reset-password', 'check');
        }, err => {
          if ((err.code === 404) || (err.code === 412)) {
            this.router.navigate(['/signup']);
          } else {
            this.responseErr = 'Sorry this operation could not be completed at this time';
          }
          this.disableBtn = false;
        }
      );
    }
  }

  getSweetAlert(title, type, text, route , check?) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    });
    let btnText;
    if (check && route === 'reset-password') {
      btnText = 'Click to Login';
    } else if (route === 'forget-succes') {
      btnText = 'Ok';
    } else {
      btnText = 'Click to register';
    }
    swalWithBootstrapButtons.fire({
      title,
      text,
      type,
      focusConfirm: false,
      showCloseButton: true,
      confirmButtonText: btnText,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        if (btnText === 'Click to Login') {this.router.navigate(['/login']);
      } else if (btnText === 'Ok') {this.router.navigate(['/forget-password']);
        } else {
          this.router.navigate(['/signup']);
        }
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'error'
        ); }
    });
  }

}
