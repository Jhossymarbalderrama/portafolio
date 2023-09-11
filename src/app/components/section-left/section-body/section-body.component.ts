
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-section-body',
  templateUrl: './section-body.component.html',
  styleUrls: ['./section-body.component.css']
})
export class SectionBodyComponent {

  dataMenu: any = {
    es: ["Inicio", "Sobre mí", "Educacion", "Experiencia", "Conocimientos", "Certificados", "Conctacto"],
    en: ["Home","About me", "Education","Experience","Skills", "Certificates", "Contact"]
  }

  constructor(public auth: AuthService) {

  }
}
