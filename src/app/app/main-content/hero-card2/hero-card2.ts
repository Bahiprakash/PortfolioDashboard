import {Component, Input} from '@angular/core';
import {CardHorizontal} from '../cardHorizontal/cardHorizontal';
import {CardHorizontal2} from '../cardHorizontal2/cardHorizontal2';
import {CardHorizontal3} from '../cardHorizontal3/cardHorizontal3';


@Component({
  selector: 'app-hero-card2',
             imports: [
               CardHorizontal,
               CardHorizontal2,
               CardHorizontal3
             ],
  templateUrl: './hero-card2.html',
  styleUrl: './hero-card2.css',
})
export class HeroCard2 {
  @Input() isPositive: boolean = true;
  @Input() trendPath: string = "M5 90 Q 25 50, 45 70 T 75 30 T 105 55 T 135 15 T 165 40 T 195 8";
}
