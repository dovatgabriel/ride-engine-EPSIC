import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ride } from '../../types/ride';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RidesService {
  private jsonServerUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(`${this.jsonServerUrl}/rides`).pipe();
  }

  getRideById(id: number): Observable<Ride> {
    return this.http.get<Ride>(`${this.jsonServerUrl}/rides/${id}`).pipe();
  }

  getLongestRide(): Observable<number> {
    return this.getRides().pipe(
      map((rides: Ride[]) => {
        if (!rides.length) return 0;
        return Math.max(...rides.map((ride) => ride.length));
      }),
    );
  }

  getShortestRide(): Observable<number> {
    return this.getRides().pipe(
      map((rides: Ride[]) => {
        if (!rides.length) return 0;
        return Math.min(...rides.map((ride) => ride.length));
      }),
    );
  }
<<<<<<< HEAD

  getLongestTimeRide(): Observable<number> {
    return this.getRides().pipe(
      map((rides: Ride[]) => {
        if (!rides.length) return 0;
        return Math.max(...rides.map((ride) => ride.duration));
      }),
    );
  }

  getShortestTimeRide(): Observable<number> {
    return this.getRides().pipe(
      map((rides: Ride[]) => {
        if (!rides.length) return 0;
        return Math.min(...rides.map((ride) => ride.duration));
      }),
    );
  }
}
=======
}
>>>>>>> 8ba4807 (feat: detail page)
