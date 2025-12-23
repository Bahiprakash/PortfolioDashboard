import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-logo',
  imports: [CommonModule],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
export class Logo {
  @Input() iconClass: string = 'fa-solid fa-bitcoin-sign';
  @Input() appName: string = 'Crypto Link';
}
