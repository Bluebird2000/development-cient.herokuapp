import { UserDataService } from './../../../../service/user-data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userForm: FormGroup;
  userId;
  userData;
  setTimeProgress;
  fetchUserProgress = 10;
  success = false;
  error = false;
  errorMessage;

  constructor(
    private service: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private _data: UserDataService
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');
   }

  ngOnInit() {
    this.listOneUser();
  }

  listOneUser() {
    this.fetchingUsersProgress();
    this.service.listOneUser(this.userId).subscribe((data: any) => {
      this.userData = data.data;
      this.userFormField();
    });
  }

  suspendUSer() {
    this.fetchingUsersProgress();
    this.service.suspendUser(this.userId).subscribe((data: any) => {
      this.fetchUserProgress = 10;
      this.success = true;
      this.userData = data.data;
      clearInterval(this.setTimeProgress);
      setTimeout(() => this.success = false, 5000);
    },
    error => {
      this.error = true;
      this.fetchUserProgress = 10;
      this.errorMessage = error.error.data.message;
      clearInterval(this.setTimeProgress);
      setTimeout(() => this.error = false, 5000);
    });
  }

  unsuspendUSer() {
    this.fetchingUsersProgress();
    this.service.unsuspendUser(this.userId).subscribe((data: any) => {
      this.fetchUserProgress = 10;
      this.success = true;
      this.userData = data.data;
      clearInterval(this.setTimeProgress);
      setTimeout(() => this.success = false, 5000);
    },
    error => {
      this.error = true;
      this.fetchUserProgress = 10;
      this.errorMessage = error.error.data.message;
      clearInterval(this.setTimeProgress);
      setTimeout(() => this.error = false, 5000);
    });
  }

  userFormField() {
    this.userForm = this.fb.group({
      firstName: [this.userData.firstName || null],
      lastName: [this.userData.lastName || null],
      email: [this.userData.email || null],
      phoneNumber: [this.userData.phoneNumber || null],
      gender: [this.userData.gender || null],
      role: [this.userData || null]
    });
  }

  fetchingUsersProgress() {
    this.setTimeProgress = setInterval(() => {
      if (this.fetchUserProgress < 90) {
        this.fetchUserProgress += 10;
      }
    }, 1000);
  }

}
