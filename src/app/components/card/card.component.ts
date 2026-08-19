import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Movie } from '../../models/movie';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatIcon, DatePipe, UpperCasePipe]
})
export class CardComponent {
  readonly genres = ['Comedy', 'Animated', 'Action', 'Horror'];
  readonly genreIcons = ['theater_comedy', 'animation', 'bolt', 'dark_mode'];

  movie = input<Movie>(new Movie());
  locked = input<boolean>(false);
  size = input<'featured' | 'grid'>('grid');
}
