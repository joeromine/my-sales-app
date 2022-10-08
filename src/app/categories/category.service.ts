import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from './category.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get<Category[]>(environment.api + 'categories')
  }

  save(category: Category){
   if(category.id){
      return this.http.put<Category>(environment.api + `categories/${category.id}`, category)
    }
    return this.http.post<Category>(environment.api +'categories', category)
  }
  delete(id: number){
    return this.http.delete(environment.api + 'categories/'+ id);
  }
}
