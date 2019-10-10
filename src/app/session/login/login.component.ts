import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginInterface } from '../../interface/auth-interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginErr = false;
  loginErrorMsg;
  public loginForm: FormGroup;
  isLogin = false;
  resendResponse;
  urlPath: string;
  disableBtn = false;
  constructor(
    private authsrv: AuthService,
    private router: Router,
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    this.loginFormField();
  }

  loginFormField() {
    this.loginForm = new FormGroup ({
      username: new FormControl('', [Validators.required, CustomValidators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  clearLoginErr() {
    this.loginErr = false;
  }

  get username() {return this.loginForm.get('username'); }
  get password() {return this.loginForm.get('password'); }

  login() {
    if (this.loginForm.valid) {
      const payload = {
        username: this.username.value,
        password: this.password.value,
      };
      this.resetField();
      this.getDisableBtn(true);
      this.authsrv.login(payload).subscribe(
        (data: LoginInterface) => {
          this.getDisableBtn(false);
          this.router.navigate(['/dashboard']);
        }, err => {
          if (err.status === 400) {
            // this.getSweetAlert('', 'warning' , err.error.data.msg, 'login');
            this.loginErr = true;
            this.loginErrorMsg = err.error.data.msg;
          }
          this.getDisableBtn(false);
        }
      );
    }
  }

  private getDisableBtn(value: boolean) { this.disableBtn = value; }
  get getDisableState() { return this.loginForm.invalid || this.disableBtn; }

  resetField() {
    this.loginErr  = null;
  }

  getSweetAlert(title, type, text, route ) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons.fire({
      title,
      text,
      type,
      focusConfirm: false,
      showCloseButton: true,
      // showConfirmButton: route === 'login' ? true : false,
      confirmButtonText: route === 'login' ? 'Click to resend link' : 'Ok',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.authsrv.resend(this.username.value).subscribe(
          (data: any) => {
            this.resendResponse = data;
          }, err => console.log(err)
        );
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
