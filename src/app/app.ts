import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './app/navbar/navbar';
import {LeftPanel} from './app/left-panel/left-panel';

@Component({
  selector: 'app-root',
             imports: [RouterOutlet, NavbarComponent, LeftPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PortfolioDashboard');
}
