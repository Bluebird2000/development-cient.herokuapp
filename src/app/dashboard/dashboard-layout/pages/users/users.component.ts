import { AuthService } from './../../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserDataService } from '../../../../service/user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  fetchingUsers = false;
  setTimeProgress;
  fetchUserProgress = 10;

  constructor(private service: AuthService, private router: Router, private _data: UserDataService) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers() {
    this.fetchingUsers = true;
    this.fetchingUsersProgress();
    this.service.listUsers().subscribe((data: any) => {
      if (data) {
        this.fetchingUsers = false;
        clearInterval(this.setTimeProgress);
        this.users = data.data;
      }
    });
  }

  viewUSer(user) {
    // this._data.data = {
    //   user
    // };
    this.router.navigate(['/users', user._id]);
  }


  userStatus(status) {
    if (status) { return 'Active'; }
    return 'Suspended';
  }

  fetchingUsersProgress() {
    this.setTimeProgress = setInterval(() => {
      if (this.fetchUserProgress < 90) {
        this.fetchUserProgress += 10;
      }
    }, 1000);
  }

}
