import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../service/main-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories;
  setTimeProgress;
  fetchForumProgress = 10;
  constructor(private service: MainService) { }

  ngOnInit() {
    this.listCategories();
  }

  listCategories() {
    this.fetchingCategoryProgress();
    this.service.listCategories().subscribe((data: any) => {
      if (data) {
        this.categories = data.data;
        clearInterval(this.setTimeProgress);
        console.log(this.categories);
      }
    });
  }

  fetchingCategoryProgress() {
    this.setTimeProgress = setInterval(() => {
      if (this.fetchForumProgress < 90) {
        this.fetchForumProgress += 10;
      }
    }, 1000);
  }

}
