import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Dog } from './dogs';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  private dogsUrl = 'api/dogs';
  dogs: Dog[] = [];

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsUrl);
  }

  dogsNameSearch(term: string): Observable<Dog[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http
      .get<Dog[]>(`${this.dogsUrl}/?name=${term}`)
  }

  dogsRaceSearch(term: string): Observable<Dog[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http
      .get<Dog[]>(`${this.dogsUrl}/?race=${term}`)
  }

  constructor(private http: HttpClient) { }
}
