import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guest } from '../interfaces/guest';

@Injectable({
  providedIn: 'root'
})

export class EditGuestService {
  private url = `${environment.apiURL}/Guest`;
  private token = localStorage.getItem('token') || "";
  private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })

  constructor(
    private http: HttpClient
  ) { }

  getGuest(id: number): Observable<Guest> {
    const URL = `${this.url}/get-guest-by-id/${id}`;
    const guest = this.http.get(URL, { headers: this.headers }) as Observable<Guest>
    return guest;
  }

  editGuest(guest: Guest): void {
      console.log(guest);
      const URL = `${this.url}/update-guest`;
      this.http.put(URL, guest, { headers: this.headers }).subscribe(() => console.log("Guest edited"));
  }
}
