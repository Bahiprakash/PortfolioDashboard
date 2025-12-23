import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() label: string = 'Button';
  @Input() leftIcon: string | null = null;
  @Input() rightIcon: string | null = null;
  @Input() disabled: boolean = false;
}
