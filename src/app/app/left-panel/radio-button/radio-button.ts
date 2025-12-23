import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
             selector: 'app-glass-radio',
             standalone: true,
             imports: [CommonModule],
             templateUrl: './radio-button.html',
             styleUrl: './radio-button.css'
           })
export class GlassRadioComponent {
  @Input() selected: 'wallet' | 'pool' = 'wallet';
  @Output() selectedChange = new EventEmitter<'wallet' | 'pool'>();

  select(option: 'wallet' | 'pool') {
    this.selected = option;
    this.selectedChange.emit(option);
  }
}
