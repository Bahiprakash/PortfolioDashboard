import { Component } from '@angular/core';
import {Card} from './card/card';
import {PromoCardComponent} from './promo-card/promo-card';
import {HeroCard} from './hero-card/hero-card';
import {HeadingMini} from './heading-mini/heading-mini';
import {HeadingMini2} from './heading-mini2/heading-mini2';
import {Card2} from './card2/card2';
import {Card3} from './card3/card3';

@Component({
  selector: 'app-main-content',
             imports: [
               Card,
               PromoCardComponent,
               HeroCard,
               HeadingMini,
               HeadingMini2,
               Card2,
               Card3
             ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
})
export class MainContent {

}
