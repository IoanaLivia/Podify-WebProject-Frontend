import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../interfaces/guest';
import { environment } from 'src/environments/environment';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})

export class AddGuestService {

  
  private url = `${environment.apiURL}/Guest`;
  private token = localStorage.getItem('token') || "";
  private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })

  constructor(private http: HttpClient) { }

  addGuest(guest: Guest): void {
      console.log(guest);
      const URL = `${this.url}/create-guest`;
      this.http.post(URL, guest, { headers: this.headers }).subscribe(() => console.log("Guest added"));
  }
  
}
