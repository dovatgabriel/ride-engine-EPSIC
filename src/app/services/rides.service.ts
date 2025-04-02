import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ride } from '../../types/ride';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RidesService {
  private jsonServerUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(`${this.jsonServerUrl}/rides`).pipe();
  }
}
