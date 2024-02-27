import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  addCategory(model: AddCategoryRequest) : Observable<void> {
    // calls the API to add a new category - route, body (the model)
    return this.http.post<void>(`https://localhost:7211/api/categories`, model);
  }

}
