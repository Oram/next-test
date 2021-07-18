import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // TODO should probably consider lazy loading and caching

  private readonly serverUrl = 'http://localhost:3000/movies';

  constructor(private httpClient: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.serverUrl);
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.httpClient
      .get<Movie[]>(`${this.serverUrl}/${movieId}`)
      .pipe(map((it) => it[0]));
  }
}
