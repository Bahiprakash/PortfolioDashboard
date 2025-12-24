import { Component } from '@angular/core';
import {GlassDropdownComponent} from '../../left-panel/glass-dropdown/glass-dropdown';
import {AlertButtonComponent} from '../../navbar/alert/alert';

@Component({
             selector: 'app-heading-mini',
             templateUrl: './heading-mini.html',
             styleUrl: './heading-mini.css',
             imports: [
               GlassDropdownComponent,
               AlertButtonComponent
             ]
           })
export class HeadingMini {

}
