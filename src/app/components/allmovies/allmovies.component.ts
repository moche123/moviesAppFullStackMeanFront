import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../models/movie';
import { CardComponent } from '../card/card.component';
@Component({
    selector: 'app-allmovies',
    templateUrl: './allmovies.component.html',
    styleUrls: ['./allmovies.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CardComponent]
})
export class AllmoviesComponent implements OnInit {
  readonly movies = signal<Movie[]>([]);
  constructor(private _movieService:MovieService) { }

  ngOnInit(): void {
      this._movieService.getMoviePagePrivate().subscribe(movies=>this.movies.set(movies))
  }

}
