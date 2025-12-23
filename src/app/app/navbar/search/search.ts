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
  @Input() showButton: boolean = true; // Toggle the right-side search button

  @Output() onSearch = new EventEmitter<string>();

  query: string = '';

  handleSearch() {
    this.onSearch.emit(this.query);
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
