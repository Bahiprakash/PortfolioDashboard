import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
             selector: 'app-glass-dropdown',
             standalone: true,
             imports: [CommonModule],
             templateUrl: './glass-dropdown.html',
             styleUrl: './glass-dropdown.css'
           })
export class GlassDropdownComponent {
  @Input() label: string = 'Menu';
  @Input() iconClass: string = 'fa-solid fa-layer-group';
  @Input() isSidebarCollapsed: boolean = false;

  // Internal state for dropdown expansion
  isOpen = signal(false);

  toggleDropdown() {
    if (!this.isSidebarCollapsed) {
      this.isOpen.update(v => !v);
    }
  }
}
