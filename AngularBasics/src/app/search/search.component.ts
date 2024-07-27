import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = 'Cellphones';
  changeSearchValue(event: any) {
    console.log((<HTMLInputElement>event.target).value);
    this.searchText = (<HTMLInputElement>event.target).value;
  }
}
