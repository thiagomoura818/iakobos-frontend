import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { TestamentBox } from '../../shared/components/testament-box/testament-box';

@Component({
  selector: 'app-home',
  imports: [Header, TestamentBox],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
