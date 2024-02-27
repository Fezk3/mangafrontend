import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnDestroy{

  model: AddCategoryRequest;
  private categorySubscription?: Subscription;

  constructor(private categoryService: CategoryService) { 

    this.model = {
      Name: '',
      UrlHandle: ''
    }

  }

  onFormSubmit() {
    this.categoryService.addCategory(this.model).subscribe(() => {
      next: () => {
        alert('Category added successfully');
      }
    }
    );
  }

  ngOnDestroy(): void {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }

}
