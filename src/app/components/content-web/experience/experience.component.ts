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
  datas: any[] = [];
  title: string = '';

  constructor(private auth: AuthService) {
    this.auth.data$.subscribe(data => {
      if (data) {
        const experiences = this.auth.getDataExperience || [];
        this.datas = experiences.reverse();
        this.title = experiences.length > 0 ? experiences[0].title : 'Experiencia';
      }
    })
  }
}