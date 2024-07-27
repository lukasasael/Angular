import { Component } from '@angular/core';

@Component({
  selector: 'app-third-html',
  standalone: true,
  imports: [],
  template: `<div>third-html works!</div>
  <p>Lorem ipsum dolor sit.</p>`,
  styles: ['div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align:center;}', 'p{color:#FAD7A0}']
})
export class ThirdHtmlComponent {

}
