import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url = `${environment.baseUrl}`;
  user;

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
   }

   appendAuthHeader(): any {
    return {
      headers: {
        Authorization: `Bearer ${this.user.tokenData.token}`
      }
    };
  }

  addForum(data: any) {
    return this.http.post<any>(`${this.url}/topic`, data, this.appendAuthHeader());
  }

  listForums() {
    return this.http.get<any>(`${this.url}/topic`, this.appendAuthHeader());
  }

  listOneForum(id) {
    return this.http.get<any>(`${this.url}/topic/${id}`, this.appendAuthHeader());
  }

  deleteForum(id) {
    return this.http.delete<any>(`${this.url}/topic/${id}`, this.appendAuthHeader());
  }

  addCategory(data: any) {
    return this.http.post<any>(`${this.url}/category`, data, this.appendAuthHeader());
  }

  listCategories() {
    return this.http.get<any>(`${this.url}/category`, this.appendAuthHeader());
  }
}
