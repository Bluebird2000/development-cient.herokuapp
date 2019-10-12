import { AuthService } from './../../../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private service: AuthService) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers() {
    this.service.listUsers().subscribe((data: any) => {
      if (data) {
        this.users = data.data;
        console.log(data.data);

      }
    });
  }

}
