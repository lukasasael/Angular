import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-third-html',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
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
    '.fadeOut {visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}'
  ],
})
export class ThirdHtmlComponent {
  displayNotification: boolean = false;
  closeNotification() {
    this.displayNotification = true;
  }
}
