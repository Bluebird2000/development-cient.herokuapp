import { MainService } from './../../../../service/main-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-forum',
  templateUrl: './view-forum.component.html',
  styleUrls: ['./view-forum.component.scss']
})
export class ViewForumComponent implements OnInit {
  forums;
  constructor(private service: MainService) { }

  ngOnInit() {
    this.viewForums();
  }

  viewForums() {
    this.service.listForums().subscribe((data: any) => {
      if (data) {
        this.forums = data.data;
        console.log(this.forums);
      }
    });
  }

}
