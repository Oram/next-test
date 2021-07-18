import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  src: SafeResourceUrl = '';
  title: SafeResourceUrl = '';
  rating: string = '';
  runtime: string = '';
  synopsis: SafeResourceUrl = '';

  constructor(
    movieService: MovieService,
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<MovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    movieService.getMovie(data).subscribe((movie) => {
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(
        movie.largeimage ?? movie.image
      );
      this.title = this.sanitizer.bypassSecurityTrustHtml(movie.title);
      this.rating = movie.rating;
      this.runtime = movie.runtime;
      this.synopsis = this.sanitizer.bypassSecurityTrustHtml(movie.synopsis);
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
