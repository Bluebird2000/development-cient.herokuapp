import { MainService } from './../../../../service/main-service.service';
import { AuthService } from './../../../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  date;
  users;
  forums;
  markets;
  setTimeProgress;
  fetchForumProgress = 10;
  constructor(private authSrv: AuthService, private mainSrv: MainService) { }

  ngOnInit() {
    this.date = new Date();
    this.listUsers();
  }

  listUsers() {
    this.fetchingForumProgress();
    this.authSrv.listUsers().subscribe((data: any) => {
      if (data) {
        this.users = data.data.length;
        this.viewForums();
      }
    });
  }

  viewForums() {
    this.mainSrv.listForums().subscribe((data: any) => {
      if (data) {
        this.forums = data.data.length;
        clearInterval(this.setTimeProgress);
      }
    });
  }

  fetchingForumProgress() {
    this.setTimeProgress = setInterval(() => {
      if (this.fetchForumProgress < 90) {
        this.fetchForumProgress += 10;
      }
    }, 1000);
  }

}
