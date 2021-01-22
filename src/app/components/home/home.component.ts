import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  showFiller = false;
  twolastMovies:Movie[] = [];

  constructor(
    private movieService:MovieService
  ){}
  ngOnInit(){
      this.movieService.getMoviePageIndex().subscribe(el=>this.twolastMovies=el);
  }

}
