import { AuthService } from '../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  registerErr = false;
  registerErrorMsg;
  disableBtn = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authSrv: AuthService
  ) { }

  ngOnInit() {
    this.signupFormField();
  }

  signupFormField() {
    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(30),
                                      Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(30),
                                     Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, CustomValidators.email]),
      password,
      confirmPassword
    });
  }

  clearRegisterErr() {
    this.registerErr = false;
  }

  resetField() {
    this.registerErr  = null;
    this.signupForm.reset();
  }
  get firstName() {return this.signupForm.get('firstName'); }
  get lastName() {return this.signupForm.get('lastName'); }
  get email() {return this.signupForm.get('email'); }
  get password() {return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }
  get passwordMatch() {return this.password.value !== this.confirmPassword.value; }
  get f() { return this.signupForm.controls; }

  register() {
    if (this.signupForm.valid) {
    const payload = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
      confirmPassword: this.confirmPassword.value,
    };
    this.resetField();
    this.getDisableBtn(true);
    this.authSrv.register(payload).subscribe(
      (data: any) => {
        this.getDisableBtn(false);
        this.signupForm.reset();
        this.getSweetAlert('Success', 'success' , data.data.msg || 'A verification email has been sent', 'register');
      }, err => {
        if (err.status === 400) {
          // this.getSweetAlert('', 'warning' , err.error.data.msg, 'login');
          this.registerErr = true;
          this.registerErrorMsg = err.error.data.msg;
        }
        this.getDisableBtn(false);
      }
    );
  }
  }

  goToLogin() {
    this.router.navigate(['/login']);
     // this.router.navigate(['/referral/login']);
   }

    private getDisableBtn(value: boolean) { this.disableBtn = value; }
    get getDisableState() { return this.signupForm.invalid || this.disableBtn; }

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
            this.router.navigate(['/signup']);
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
