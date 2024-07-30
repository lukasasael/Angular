import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularIntermediate';
  inputText: string = '';
  destroy: boolean = true;
  OnSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
  }
  destroyComponent() {
    this.destroy = !this.destroy;
  }
}
