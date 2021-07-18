import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Movie } from 'src/app/services/movie';
import { MatDialog } from '@angular/material/dialog';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'next-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  @Input()
  movie!: Movie;

  title: SafeResourceUrl = '';
  releaseDate: string = '';
  rating: string = '';
  src: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.title = this.sanitizer.bypassSecurityTrustHtml(this.movie.title);
    this.releaseDate = this.movie.released;
    this.rating = this.movie.rating;
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.image);
  }

  readMore() {
    this.dialog.open(MovieComponent, {
      data: this.movie.id,
      panelClass: 'movie-dialog',
    });
  }
}
