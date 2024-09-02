import { Component } from '@angular/core';
import data from '../../../../assets/data.json';

@Component({
  selector: 'app-header-canvas',
  standalone: true,
  imports: [],
  templateUrl: './header-canvas.component.html',
  styleUrl: './header-canvas.component.css'
})
export class HeaderCanvasComponent {
  data: any = data;
}
