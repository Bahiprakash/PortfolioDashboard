import { Component, Input } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
             selector: 'app-crypto-card4',
             standalone: true,
             imports: [CommonModule, NgOptimizedImage],
             templateUrl: './card4.html',
             styleUrl: './card4.css'
           })
export class Card4 {
  @Input() logoName: string = 'fa-brands fa-ethereum';
  @Input() name: string = 'Ethereum';
  @Input() symbol: string = 'ETH';
  @Input() amount: string = '2.9383';
  @Input() valueUsd: string = '$ 10,793.64';
  @Input() change: string = '-0.84%';
  @Input() isPositive: boolean = false;
  @Input() trendPath: string = "M5 90 Q 25 70, 55 80 T 95 40 T 135 50 T 175 15 T 195 10";

}
