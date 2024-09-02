import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent{
  data:any;

  constructor(
    private auth: AuthService
  ){
    this.auth.data$.subscribe(data => {
      if (data) {
        this.data = auth.getDataSkill;        
      }
    })
  }

}
