import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../models/movie'; 
@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})
export class AllmoviesComponent implements OnInit {
  public movies: Movie[] = [];
  constructor(private _movieService:MovieService) { }

  ngOnInit(): void {
      this._movieService.getMoviePagePrivate().subscribe(movies=>this.movies=movies)
  }

}
