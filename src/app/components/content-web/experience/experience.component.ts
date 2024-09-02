import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  data: any;  
  constructor(
    private auth: AuthService
  ){
    this.auth.data$.subscribe(data => {
      if (data) {
        this.data = auth.getDataExperience;        
      }
    })
  }
}
