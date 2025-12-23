import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
             selector: 'app-crypto-card',
             standalone: true,
             imports: [CommonModule],
             templateUrl: './card.html',
             styleUrl: './card.css'
           })
export class Card {
  @Input() name: string = 'Ethereum';
  @Input() symbol: string = 'ETH';
  @Input() amount: string = '2.9383';
  @Input() valueUsd: string = '$ 10,793.64';
  @Input() change: string = '-0.84%';
  @Input() isPositive: boolean = false;
  @Input() trendPath: string = "M0 60 Q 20 40, 40 65 T 80 75 T 120 45 T 160 85 T 200 65";
}
