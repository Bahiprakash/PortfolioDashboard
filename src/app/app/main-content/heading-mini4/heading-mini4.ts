import { Component } from '@angular/core';
import {GlassDropdownComponent} from '../../left-panel/glass-dropdown/glass-dropdown';
import {AlertButtonComponent} from '../../navbar/alert/alert';

@Component({
             selector: 'app-heading-mini4',
             templateUrl: './heading-mini4.html',
             styleUrl: './heading-mini4.css',
             imports: [
               GlassDropdownComponent,
               AlertButtonComponent,
             ]
           })
export class HeadingMini4 {

}
