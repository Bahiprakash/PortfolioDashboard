import { Component, Input } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
             selector: 'app-stacked-svg',
             standalone: true,
             templateUrl: './stacked-svg.html',
             imports: [
               NgOptimizedImage
             ],
             styleUrls: ['./stacked-svg.css']
           })
export class StackedSvgComponent {}
