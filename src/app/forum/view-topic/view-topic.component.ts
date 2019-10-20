import { ActivatedRoute } from '@angular/router';
import { MainService } from './../../service/main-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-topic',
  templateUrl: './view-topic.component.html',
  styleUrls: ['./view-topic.component.scss']
})
export class ViewTopicComponent implements OnInit {
  commentForm: FormGroup;
  forumId;
  forumData;
  setTimeProgress;
  fetchForumProgress = 10;

  constructor(
    private service: MainService,
    private route: ActivatedRoute
  ) {
    this.forumId = this.route.snapshot.paramMap.get('forumId');
   }

  ngOnInit() {
    this.listOneForum();
    this.commentForm = new FormGroup({
      comment: new FormControl('', Validators.required)
    });
  }

  get comment() { return this.commentForm.get('comment'); }

  listOneForum() {
    this.fetchingForumProgress();
    console.log(this.forumId);
    this.service.listOneForum(this.forumId).subscribe((data: any) => {
      this.forumData = data.data;
      console.log(this.forumId);
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
