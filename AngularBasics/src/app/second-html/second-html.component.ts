import { Component } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-second-html',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './second-html.component.html',
  styleUrl: './second-html.component.css'
})
export class SecondHTMLComponent {

}
