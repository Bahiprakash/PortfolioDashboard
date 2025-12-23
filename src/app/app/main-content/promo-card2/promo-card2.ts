import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
             selector: 'app-promo-card2',
             standalone: true,
             imports: [CommonModule],
             templateUrl: './promo-card2.html',
             styleUrl: './promo-card2.css'
           })
export class PromoCardComponent2 {
  @Input() title: string = 'Invest now to get $1000 Gift!';
  @Input() description: string = 'In the beta version, you have access to staking, smart swap and new features. ';
}
