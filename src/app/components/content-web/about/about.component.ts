import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterCanvasComponent } from "../../off-canvas/footer-canvas/footer-canvas.component";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FooterCanvasComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  data: any = '';
  doc_cv: string = '';

  constructor(private auth: AuthService){      
    this.auth.data$.subscribe(data => {
      if (data) {
        this.data = auth.getDataAbout;
      }
    })
  }
}
