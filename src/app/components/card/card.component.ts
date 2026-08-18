import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CardComponent implements OnInit {

  constructor(
  ) { }

  genders = ["Comedia","Animated","Action","Horror"];
  @Input() movie:Movie =  new Movie();
  @Input()widthS:number = 0 ;
  @Input()heightS:number = 0;
  ngOnInit(): void {
    
    console.log(this.movie)
  }

}
