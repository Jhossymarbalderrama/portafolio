import { Component } from '@angular/core';
import  data  from '../../../../assets/data-es.json';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-content-canvas',
  standalone: true,
  imports: [],
  templateUrl: './content-canvas.component.html',
  styleUrl: './content-canvas.component.css'
})
export class ContentCanvasComponent {
  public menu:any;

  constructor(private auth: AuthService){
    this.auth.data$.subscribe(data => {
      if (data) {
        this.menu = auth.getDataMenu;        
      }
    })
  }
}
