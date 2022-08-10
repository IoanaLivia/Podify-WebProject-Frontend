import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from '../interfaces/guest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  private url = `${environment.apiURL}/Guest`;
  private token = localStorage.getItem('token') || "";
  private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })

  public maxId = '0';

  constructor(
    public http: HttpClient,
  ) { }

  getGuests(): Observable<Guest[]> {
    const URL = `${this.url}/get-guests`;
    const guests = this.http.get(URL, { headers: this.headers }) as Observable<Guest[]>
    return guests;
}


}
