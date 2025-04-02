import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ride } from '../../types/ride';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RidesService {
  private jsonServerUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRides(searchQuery = ''): Observable<Ride[]> {
    return this.http.get<Ride[]>(`${this.jsonServerUrl}/rides`).pipe(
      map((rides) => {
        if (searchQuery) {
          return rides.filter((ride) =>
            ride.title.toLowerCase().startsWith(searchQuery.toLowerCase()),
          );
        }
        return rides;
      }),
    );
  }
}
