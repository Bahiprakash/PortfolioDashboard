import { Component } from '@angular/core';
import {GlassRadioComponent} from '../left-panel/radio-button/radio-button';
import {Card} from './card/card';
import {PromoCardComponent} from './promo-card/promo-card';

@Component({
  selector: 'app-main-content',
             imports: [
               GlassRadioComponent,
               Card,
               PromoCardComponent
             ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
})
export class MainContent {

}
