import { Component } from '@angular/core';
import {HeroComponent} from './components/landing/hero/hero.component';
import {HeaderComponent} from './components/landing/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bks';
}
