import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Episode } from '../interfaces/episode';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  
  private url = `${environment.apiURL}/Episode`;
  private token = localStorage.getItem('token') || "";
  private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': `Bearer ${this.token}`
  })

  constructor(
    public http: HttpClient,
  ) { }

  getEpisodes(): Observable<Episode[]> {
    const URL = `${this.url}/get-episodes`;
    const episodes = this.http.get(URL, { headers: this.headers }) as Observable<Episode[]>
    return episodes;
}

}
