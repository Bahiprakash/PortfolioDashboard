import {Component, Input} from '@angular/core';
import {StackedSvgComponent} from '../stacked-svg/stacked-svg';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hero-card',
             imports: [
               StackedSvgComponent,
               NgOptimizedImage
             ],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {
  @Input() isPositive: boolean = true;
  @Input() trendPath: string = "M5 90 Q 25 50, 45 70 T 75 30 T 105 55 T 135 15 T 165 40 T 195 8";
}
