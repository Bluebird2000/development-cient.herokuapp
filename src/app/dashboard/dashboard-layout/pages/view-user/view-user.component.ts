import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.userFormField();
  }

  userFormField() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required])
    });
  }

}
