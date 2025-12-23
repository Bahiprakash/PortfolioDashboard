import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SearchBarComponent} from './search/search';
import {Button} from './button/button';

@Component({
             selector: 'app-navbar',
             standalone: true,
             imports: [CommonModule, RouterModule, SearchBarComponent, Button],
             templateUrl: './navbar.html',
             styleUrls: ['./navbar.css'],
           })
export class NavbarComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  onSearchChange(term: string): void {
    console.log('Search term changed:', term);
    // Implement your search logic here
  }

  onSearch(term: string): void {
    console.log('Search submitted:', term);
    // Handle search submission
  }
}
