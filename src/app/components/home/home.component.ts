import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../models/movie';
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CardComponent]
})
export class HomeComponent implements OnInit {

  readonly twolastMovies = signal<Movie[]>([]);

  constructor(
    private movieService:MovieService
  ){}
  ngOnInit(){
      this.movieService.getMoviePageIndex().subscribe(el=>this.twolastMovies.set(el));
  }

}
