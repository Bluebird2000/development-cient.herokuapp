import { MainService } from './../../../../service/main-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-forum',
  templateUrl: './view-forum.component.html',
  styleUrls: ['./view-forum.component.scss']
})
export class ViewForumComponent implements OnInit {
  forums;
  setTimeProgress;
  fetchForumProgress = 10;

  constructor(private service: MainService) { }

  ngOnInit() {
    this.viewForums();
  }

  viewForums() {
    this.fetchingForumProgress();
    this.service.listForums().subscribe((data: any) => {
      if (data) {
        this.forums = data.data;
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
