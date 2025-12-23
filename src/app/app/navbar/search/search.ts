import { Component,EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
             selector: 'app-search-bar',
             standalone: true,
             imports: [CommonModule, FormsModule],
             templateUrl: './search.html',
             styleUrls: ['./search.css'],
           })
export class SearchBarComponent {
  @Input() placeholder: string = 'Search...';
  @Input() debounceTime: number = 300;
  @Output() searchChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();

  searchTerm: string = '';
  private debounceTimer: any;

  onSearchChange(): void {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.searchChange.emit(this.searchTerm);
    }, this.debounceTime);
  }

  onSearch(): void {
    this.search.emit(this.searchTerm);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchChange.emit('');
    this.search.emit('');
  }
}

// Usage example in parent component:
/*
import { SearchBarComponent } from './search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchBarComponent],
  template: `

  `
})
export class AppComponent {

}
*/
