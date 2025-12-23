import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
             selector: 'app-icon-text-button',
             standalone: true,
             imports: [CommonModule],
             templateUrl: './icon-text.html',
             styleUrl: './icon-text.css'
           })
export class IconText{
  @Input() iconClass: string = '';
}



