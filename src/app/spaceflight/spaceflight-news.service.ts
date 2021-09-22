import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpaceflightNewsService {
  apiUrl = 'https://api.spaceflightnewsapi.net/v3/articles';
  constructor(private http: HttpClient) {}

  getSpaceFlightNews() {
    return this.http.get(this.apiUrl);
  }
}
