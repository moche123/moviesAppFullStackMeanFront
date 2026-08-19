import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Movie } from '../../models/movie';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardImage, MatCardContent } from '@angular/material/card';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatCard, MatCardHeader, MatCardAvatar, NgClass, MatCardTitle, MatCardSubtitle, MatCardImage, MatCardContent]
})
export class CardComponent {
  genders = ["Comedia","Animated","Action","Horror"];
  movie = input<Movie>(new Movie());
  widthS = input<number>(0);
  heightS = input<number>(0);
}
