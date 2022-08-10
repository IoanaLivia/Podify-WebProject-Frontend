import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guest } from '../interfaces/guest';

@Injectable({
  providedIn: 'root'
})
export class DeleteGuestService {
  private url = `${environment.apiURL}/Guest`;
  private token = localStorage.getItem('token') || "";
  private headers = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.token}`
  })

  constructor(
    private http: HttpClient
  ) { }

  deleteGuest(id: number): void {
      const URL = `${this.url}/delete-guest/${id}`;
      this.http.delete(URL, { headers: this.headers }).subscribe(() => console.log("Guest deleted"));
  }
}
