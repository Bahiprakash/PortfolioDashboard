import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
             selector: 'app-cookie-card',
             standalone: true,
             imports: [CommonModule],
             templateUrl: './cookie-card.html',
             styleUrl: './cookie-card.css'
           })
export class CookieCardComponent {
  // Receives state from the sidebar parent
  @Input() isSidebarCollapsed: boolean = false;
}
