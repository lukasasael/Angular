import { Component } from '@angular/core';

@Component({
  selector: 'app-third-html',
  standalone: true,
  imports: [],
  template: `<div class="alert alert-success" [hidden]="displayNotification">
    third-html works!
    <div class="close">
      <button class="btn" (click)="closeNotification()">X</button>
    </div>
    <p>Lorem ipsum dolor sit.</p>
  </div>`,
  styles: [
    'div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align:center;}',
    'p{color:#FAD7A0}',
    '.close{float:right; margin-top:-5px;}',
  ],
})
export class ThirdHtmlComponent {
  displayNotification: boolean = false;
  closeNotification() {
    this.displayNotification = true;
  }
}
