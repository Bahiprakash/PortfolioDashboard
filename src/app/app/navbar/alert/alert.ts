
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
             selector: 'app-alert',
             standalone: true,
             imports: [CommonModule],
             templateUrl: './alert.html',
             styleUrl: './alert.css'
           })
export class AlertButtonComponent {
  @Input() iconClass: string = 'fa-solid fa-bell';
  @Input() hasNotification: boolean = true;
}
