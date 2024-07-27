import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SecondHTMLComponent } from './second-html/second-html.component';
import { ThirdHtmlComponent } from './third-html/third-html.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-roots',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SecondHTMLComponent,
    ThirdHtmlComponent,
    SearchComponent,
    ProductsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  siteName = 'Saturday for Him';
  title = 'AngularBasics';

  @ViewChild('greetPerson') greetingPerson!: ElementRef;
  @ViewChild('personName') nameOfPerson!: ElementRef;

  printPersonName() {
    let greeting = this.greetingPerson!.nativeElement.innerText;
    this.nameOfPerson.nativeElement.innerText = greeting;
  }
}
