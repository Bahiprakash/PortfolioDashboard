import {Component, signal, WritableSignal} from '@angular/core';
import {Button} from './button/button';
import { CommonModule } from '@angular/common';
import {GlassRadioComponent} from './radio-button/radio-button';
import {CookieCardComponent} from './cookie-card/cookie-card';
import {GlassDropdownComponent} from './glass-dropdown/glass-dropdown';

@Component({
  selector: 'app-left-panel',
             imports: [
               Button,
               CommonModule,
               GlassRadioComponent,
               CookieCardComponent,
               GlassDropdownComponent
             ],
  templateUrl: './left-panel.html',
  styleUrl: './left-panel.css',
})
export class LeftPanel {
// Signal to track if the sidebar is collapsed
  isCollapsed = signal(false);

  toggleSidebar() {
    this.isCollapsed.set(!this.isCollapsed());
  }

  protected onToggleChange($event: "wallet" | "pool") {
    console.log($event);
  }
}
