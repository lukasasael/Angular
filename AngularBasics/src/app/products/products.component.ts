import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FilterComponent, SearchComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Julia Coelho',
      city: 'São Luís',
      birthday: '11/10',
      christian: 'yes',
      beautiful: 'yes',
    },
    {
      id: 2,
      name: 'Lukas Asael',
      city: 'Recife',
      birthday: '15/11',
      christian: 'yes',
      beautiful: 'yes',
    },
    {
      id: 3,
      name: 'Davi Ariel',
      city: 'Recife',
      birthday: '10/08',
      christian: 'yes',
      beautiful: 'yes',
    },
    {
      id: 4,
      name: 'Fabio Marcelo',
      city: 'Recife',
      birthday: '30/11',
      christian: 'yes',
      beautiful: 'no',
    },
    {
      id: 5,
      name: 'Josue Vitor',
      city: 'Recife',
      birthday: 'unknown',
      christian: 'no',
      beautiful: 'no',
    },
  ];

  monsterRevealed: boolean = false;

  showMonster(event: any) {
    this.monsterRevealed = !this.monsterRevealed;
    console.log(this.products[4]);
    return this.products[4];
  }

  getTotalProducts() {
    return this.products.length;
  }

  getBeautifulProducts() {
    return this.products.filter((person) => person.beautiful != 'no').length;
  }

  getUglyProducts() {
    return this.products.filter((person) => person.beautiful === 'no').length;
  }

  peopleCountRadioButton: string = 'all';

  onFilterRadioButtonChanged(data: string) {
    this.peopleCountRadioButton = data;
  }

  searchText: string = '';

  onSearchTextEntered(data: string) {
    this.searchText = data;
  }
}
