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
}
