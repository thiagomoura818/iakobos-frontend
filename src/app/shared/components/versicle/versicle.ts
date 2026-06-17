import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-versicle',
  imports: [],
  templateUrl: './versicle.html',
  styleUrl: './versicle.css',
})
export class Versicle {
  text = input<string>('Teste teste teste ');
  versicleNumber = input<string>('1');

} 
