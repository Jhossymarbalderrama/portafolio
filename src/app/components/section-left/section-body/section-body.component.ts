
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
      home: "inicio",
      about: "sobre mí",
      education: "educación",
      experience: "experiencia",
      project: "proyectos",
      skill: "conocimientos",
      certificate: "certificados",
      contact: "contacto"
    },
    en: {
      home: "home",
      about: "about me",
      education: "education",
      experience: "experience",
      project: "project",
      skill: "skill",
      certificate: "certificates",
      contact: "contact"
    },
    br: {
      home: "lar",
      about: "sobre mim",
      education: "Educação",
      experience: "experiência",
      project: "projeto",
      skill: "skill",
      certificate: "certificados",
      contact: "contato"
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {

  }


  changeLanguaje(): boolean {
    if (this.auth.languajeSelect == 'es') {
      this.data = this.dataMenu.es;
    } else if (this.auth.languajeSelect == 'en') {
      this.data = this.dataMenu.en;
    } else {
      this.data = this.dataMenu.br;
    }
    return true;
  }


  closeMenu() {
    const btn = document.getElementById('navbarsExample01');

    btn?.classList.add('collapse');
    btn?.classList.add('navbar-collapse');
    
  }
}
