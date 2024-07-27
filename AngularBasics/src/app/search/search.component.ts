import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';
  changeSearchValue(event: any) {
    console.log((<HTMLInputElement>event.target).value);
    this.searchText = (<HTMLInputElement>event.target).value;
  }
}
