import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './book-button.html',
  styleUrl: './book-button.css',
})
export class BookButton {
  position     = input<number>();
  abbreviation = input<string>();
  name         = input<string>();
  translation  = input<string>();
}
