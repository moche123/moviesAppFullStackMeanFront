import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private urlIndex:string = 'http://localhost:3000/';
  private url:string = 'http://localhost:3000/movies';
  private httpOptions = {
    headers: {
      //'Content-Type': 'application/json',
      Authorization: 'Bearer '+localStorage.getItem('token')
    }
  };
  constructor(private http:HttpClient) { }
  getMoviePageIndex():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.urlIndex);
  }
  getMoviePagePrivate():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url,this.httpOptions);
  }
}
