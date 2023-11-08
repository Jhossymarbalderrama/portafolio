import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  dataSkills: any = {
    es: {
      title: "Tecnologías con las que estoy familiarizado"
    },
    en: {
      title: "Technologies with which I am familiar"
    },
    br: {
      title: "Tecnologias com as quais estou familiarizado"
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {

  }

  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataSkills.es;
    }else if(this.auth.languajeSelect == 'en'){
      this.data = this.dataSkills.en;
    }else{
      this.data = this.dataSkills.br;
    }
    return true;
  }
}
