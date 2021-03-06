import { MainService } from './../../../../service/main-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.scss']
})
export class AddForumComponent implements OnInit {
  forumForm: FormGroup;
  loading = false;
  submitted = false;
  disableBtn = false;
  success = false;
  error = false;
  errorMessage;
  setTimeProgress;
  addingForum = 10;
  categoryList = [];

  constructor(private service: MainService) { }

  ngOnInit() {
    this.forumFormField();
    this.listCategories();
  }

  get topic() { return this.forumForm.get('topic'); }
  get category() { return this.forumForm.get('category'); }
  get upload_file() { return this.forumForm.get('upload_file'); }
  get description() { return this.forumForm.get('description'); }
  get getDisableState() { return this.forumForm.invalid || this.disableBtn; }
  private getDisableBtn(value: boolean) { this.disableBtn = value; }

  onFileChanged(event) {
    const file = event.target.files[0];
    this.forumForm.get('upload_file').setValue(file);
  }

  listCategories() {
    this.service.listCategories().subscribe((data: any) => {
      if (data) {
        this.categoryList = data.data;
      }
    });
  }

  forumFormField() {
    this.forumForm = new FormGroup({
      topic: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      upload_file: new FormControl(''),
      description: new FormControl('', [Validators.required])
    });
  }

  formSubmit() {
    if (this.forumForm.valid) {
      const formData = new FormData();
      this.submitted = true;
      this.getDisableBtn(true);
      formData.append('topic', this.topic.value);
      formData.append('category', this.category.value);
      formData.append('upload_file', this.upload_file.value);
      formData.append('description', this.description.value);
      this.forumCreatingProgress();
      this.service.addForum(formData).subscribe(
        (data: any) => {
          console.log(data);
          this.addingForum = 10;
          this.success = true;
          clearInterval(this.setTimeProgress);
          setTimeout(() => this.success = false, 5000);
          this.getDisableBtn(false);
          this.loading = false;
        },
        error => {
          this.error = true;
          console.log(error);
          this.addingForum = 10;
          clearInterval(this.setTimeProgress);
          setTimeout(() => this.error = false, 5000);
          this.errorMessage = error.error.data[0].constraints.unique;
          this.getDisableBtn(false);
          this.loading = false;
        }
      );
    }
  }

  forumCreatingProgress() {
    this.setTimeProgress = setInterval(() => {
      if (this.addingForum < 90) {
        this.addingForum += 10;
      }
    }, 1000);
  }
}
