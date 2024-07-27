import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input('general') all: number = 0;
  @Input() beautiful: number = 0;
  @Input() ugly: number = 0;

  selectedRadioButtonValue: string = 'all';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }
}
