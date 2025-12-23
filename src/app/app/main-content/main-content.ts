import { Component } from '@angular/core';
import {GlassRadioComponent} from '../left-panel/radio-button/radio-button';
import {Card} from './card/card';
import {PromoCardComponent} from './promo-card/promo-card';
import {HeroCard} from './hero-card/hero-card';
import {Card2} from './card2/card2';
import {PromoCardComponent2} from './promo-card2/promo-card2';
import {HeadingMini} from './heading-mini/heading-mini';

@Component({
  selector: 'app-main-content',
             imports: [
               GlassRadioComponent,
               Card,
               PromoCardComponent,
               HeroCard,
               Card2,
               PromoCardComponent2,
               HeadingMini
             ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
})
export class MainContent {

}
