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
  @Input() canDropdownBeOpen: boolean = true;
  @Input() showIcon: boolean = true;
  @Input() showArrow: boolean = true;
  @Input() iconColor: string = 'currentColor';

  // Internal state for dropdown expansion
  isOpen = signal(false);

  toggleDropdown() {
    if (!this.isSidebarCollapsed && this.canDropdownBeOpen) {
      this.isOpen.update(v => !v);
    }
  }
}
