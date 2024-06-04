
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-section-body',
  templateUrl: './section-body.component.html',
  styleUrls: ['./section-body.component.css']
})
export class SectionBodyComponent {

  dataMenu: any = {
    es: {
      home: "Home",
      about: "Sobre mí",
      education: "Educación",
      experience: "Experiencia",
      project: "Proyectos",
      skill: "Conocimientos",
      certificate: "Certificados",
      contact: "Contacto"
    },
    en: {
      home: "Home",
      about: "About me",
      education: "Education",
      experience: "Experience",
      project: "Project",
      skill: "Skill",
      certificate: "Certificates",
      contact: "Contact"
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {

  }


  changeLanguaje(): boolean {
    if (this.auth.languajeSelect == 'es') {
      this.data = this.dataMenu.es;
    } else{
      this.data = this.dataMenu.en;
    } 
    return true;
  }


  closeMenu() {
    const btn = document.getElementById('navbarsExample01');
    
    if(btn?.classList.contains('collapse')){
      btn?.classList.remove('collapse');
      btn?.classList.remove('show');
    }else{
      btn?.classList.add('collapse');
    }
  }
}
