import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly serverUrl = 'http://localhost:3000/movies'

  constructor(private httpClient: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.serverUrl);
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.serverUrl}/${movieId}`);
  }
}
