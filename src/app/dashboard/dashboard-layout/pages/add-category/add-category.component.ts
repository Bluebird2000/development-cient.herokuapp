import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../service/main-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  loading = false;
  submitted = false;
  disabledBtn = false;
  success = false;
  error = false;
  errorMessage;
  setTimeProgress;
  addingCategory = 10;

  constructor(private service: MainService) { }

  ngOnInit() {
    this.categoryFormField();
  }

  get name() { return this.categoryForm.get('name'); }
  get description() { return this.categoryForm.get('description'); }
  get getDisableState() { return this.categoryForm.invalid || this.disabledBtn; }
  private getDisableBtn(value: boolean) { return this.disabledBtn = value; }

  categoryFormField() {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  formSubmit() {
    if (this.categoryForm.valid) {
      this.submitted = true;
      this.getDisableBtn(true);
      const payload = {
        name: this.name.value,
        description: this.description.value
      };
      this.categoryCreatingProgress();
      this.service.addCategory(payload).subscribe(
        (data: any) => {
          this.addingCategory = 10;
          this.success = true;
          clearInterval(this.setTimeProgress);
          setTimeout(() => this.success = false, 5000);
          this.getDisableBtn(false);
          this.loading = false;
        },
        error => {
          this.error = true;
          this.addingCategory = 10;
          clearInterval(this.setTimeProgress);
          setTimeout(() => this.error = false, 5000);
          console.log(error.error);
          this.errorMessage = error;
          this.getDisableBtn(false);
          this.loading = false;
        }
      );
    }
  }

  categoryCreatingProgress() {
    this.setTimeProgress = setInterval(() => {
      if (this.addingCategory < 90) {
        this.addingCategory += 10;
      }
    }, 1000);
  }

}
