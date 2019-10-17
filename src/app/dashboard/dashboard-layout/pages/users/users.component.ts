import { AuthService } from './../../../../service/auth.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private service: AuthService) { }

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
