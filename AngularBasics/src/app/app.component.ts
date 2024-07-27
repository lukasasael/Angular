import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SecondHTMLComponent } from "./second-html/second-html.component";
import { ThirdHtmlComponent } from "./third-html/third-html.component";

@Component({
  selector: 'app-roots',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SecondHTMLComponent, ThirdHtmlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularBasics';
}
