import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AstropodService {
  apiUrl: string = 'https://api.nasa.gov/planetary/apod?api_key=' + environment.apiKey;

  constructor(private http: HttpClient) { }

  getApod() {
    return this.http.get<any>(this.apiUrl);
  }

  getImageOn(date: string) {
    return this.http.get<any>(this.apiUrl + '&date=' + date);
  }
}
