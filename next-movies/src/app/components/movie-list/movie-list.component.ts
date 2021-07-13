import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/services/movie';

@Component({
  selector: 'next-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(movieService: MovieService) {
    /* For simplicity I'm loading all the movies at once and store them.
    In reality maybe lazy loading is required.
    Maybe there is need to refresh the data - requirements don't mention if and when to do it */
    movieService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  ngOnInit(): void {}
}
