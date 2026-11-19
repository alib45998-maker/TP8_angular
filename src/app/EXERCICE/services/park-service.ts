import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Park } from '../models/park';

const URL = 'http://localhost:3000/parks';

@Injectable({
  providedIn: 'root'
})
export class ParkService {
  private readonly _http = inject(HttpClient);
  private readonly _parks = signal<Park[]>([]);
  parks = this._parks.asReadonly();
   _mypark = signal<Park | undefined >(undefined)

  getParks(): Observable<Park[]> {
    return this._http.get<Park[]>(URL).pipe(tap(parkes => this._parks.set(parkes)));
  }

  getParkById(id: string): Observable<Park> {
    return this._http.get<Park>(`${URL}/${id}`).pipe(tap(par => this._mypark.set(par)));
  }

  deletePark(id: string): Observable<void> {
    return this._http.delete<void>(`${URL}/${id}`).pipe(tap(() => this._parks.update(pr => pr.filter(p => p.id !== id)))
    );
  }

  updatePark(park: Park): Observable<Park> {
    return this._http.put<Park>(`${URL}/${park.id}`, park).pipe(tap(newpark => this._parks.update(pr =>pr.map(p => (p.id === newpark.id ? newpark : p))))
    );
  }
}
