import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-input-label',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-input-label.html',
  styleUrl: './forms-input-label.css',
})
export class FormsInputLabel {
  labelName = input<string>();
  inputType = input<string>();
  placeHolder = input<string>();

  control = input.required<FormControl>();
}
