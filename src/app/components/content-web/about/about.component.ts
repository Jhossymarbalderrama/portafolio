import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterCanvasComponent } from "../../off-canvas/footer-canvas/footer-canvas.component";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  data: any = '';
  doc_cv: string = '';
  dataEmpty: any = {
    title: '¡Ups! Section not loaded 😢',
    btnDescription: 'Refresh'
  };
  
  constructor(private auth: AuthService){      
    this.getDataAbout();
  }


  public getDataAbout(){
    this.auth.data$.subscribe(data => {
      if (data) {
        this.data = this.auth.getDataAbout;
      }
    })
  }
}
