import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-book-button',
  imports: [CommonModule],
  templateUrl: './book-button.html',
  styleUrl: './book-button.css',
})
export class BookButton {
  position = input<number>();
  abbreviation = input<string>();
  name = input<string>();
}
