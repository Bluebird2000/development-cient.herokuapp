import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../service/main-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories;
  constructor(private service: MainService) { }

  ngOnInit() {
  }

  listCategories() {
    this.service.listCategories().subscribe((data: any) => {
      if (data) {
        this.categories = data.data;
      }
    });
  }

}
