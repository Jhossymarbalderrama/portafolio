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
      db: "Base de datos",
      tools: "Herramientas",
      others: "Otras tecnologías",
    },
    en: {
      db: "Data base",
      tools: "Tools",
      others: "Other technologies",
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {

  }

  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataSkills.es;
    }else{
      this.data = this.dataSkills.en;
    }
    return true;
  }
}
