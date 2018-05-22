import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CricketersService {

  apiUrl = 'http://localhost:3030';

  constructor(private http: HttpClient) { }
  getAllPlayers() {
    return this.http.get(`${this.apiUrl}/players`);
  }
  getPlayerDetails(id) {
    return this.http.get(`${this.apiUrl}/players/${id}`);
  }
}
