import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApod } from '../interfaces/iapod';

@Injectable({
  providedIn: 'root'
})
export class AstropodService {
  apiUrl: string = 'https://api.nasa.gov/planetary/apod?api_key=' + environment.apiKey;

  constructor(private http: HttpClient) { }

  getApod() {
    return this.http.get<any>(this.apiUrl);
  }

  getImageOn(date: string): Observable<IApod> {
    return this.http.get<IApod>(this.apiUrl + '&date=' + date);
  }
}
