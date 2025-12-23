import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
             selector: 'app-promo-card',
             standalone: true,
             imports: [CommonModule],
             templateUrl: './promo-card.html',
             styleUrl: './promo-card.css'
           })
export class PromoCardComponent {
  @Input() title: string = 'Unlimited Access to Trading AI Bots!';
  @Input() description: string = 'In the beta version, you have access to staking, smart swap and new features.';
}
