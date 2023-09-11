import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
 
  dataSkills: any = {
    es:{
      title:"Tecnologías con las que estoy familiarizado"
    },
    en:{
      title:"Technologies with which I am familiar"
    }
  }

 constructor(public auth: AuthService) {

 }
}
