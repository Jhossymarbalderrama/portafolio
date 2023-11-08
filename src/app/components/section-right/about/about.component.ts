import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  firstName: string = "Jhossymar";
  lastName: string = "Balderrama Rocha";
  phone: string = "+54 9 11 6307-9082";
  email: string = "jhossymarbalderrama@gmail.com";
  location: string = "Avellaneda, Buenos Aires - Argentina";

  dataAbout: any = {
    es: {
      firstName: this.firstName,
      lastName: this.lastName,
      profession: "Desarrollador Full Stack",
      phone: this.phone,
      email: this.email,
      location: this.location,
      btn: "Descargar CV",
      description: ["Hola, mi nombre es Jhossymar, pero también me dicen Jhossy, tengo 25 años y soy de Buenos Aires, Argentina. Mi experiencia laboral y formación siempre fueron sobre tecnología.",
      "Al terminar mis estudios secundarios tuve la gran oportunidad de ir como pasante a CA-VLB s.a. una empresa de desarrollo de software, allí pude ampliar mis conocimientos en las áreas de soporte TI y desarrollo de software.",
      "En el año 2019 inicié mis estudios universitarios en la Universidad Tecnológica Nacional de Avellaneda, específicamente en la carrera de Técnico Universitario en Programación."
      ],                  
      phrase: "“Mi objetivo es la creación y desarrollo de software que satisfaga y resuelva problemas ya sea en el área Backend o Frontend..”"
    },
    en: {
      firstName: this.firstName,
      lastName: this.lastName,
      profession: "Full Stack Developer",
      phone: this.phone,
      email: this.email,
      location: this.location,
      btn: "Download CV",
      description: ["Hello, my name is Jhossymar, but they also call me Jhossy, I am 25 years old and I am from Buenos Aires, Argentina. My work experience and training were always about technology.",
                    "When I finished my secondary studies I had the great opportunity to go as an intern at CA-VLB s.a. a software development company, there I was able to expand my knowledge in the areas of IT support and software development.",
                    "In 2019 I began my university studies at the National Technological University of Avellaneda, specifically in the degree of University Technician in Programming."],
      phrase: "“My goal is the creation and development of software that satisfies and solves problems whether in the Backend or Frontend area.”"
    },
    br: {
      firstName: this.firstName,
      lastName: this.lastName,
      profession: "Full Stack Developer",
      phone: this.phone,
      email: this.email,
      location: this.location,
      btn: "Download CV",
      description: ["Hello, my name is Jhossymar or also tell me Jhossy, I am 25 years old and I'm from Avellaneda.",
                    "My training was always about technology, when I finished my secondary studies I had the opportunity to go as an intern to a software development company, there I could expand my knowledge about the programming and the development of applications for different platforms.",
                    "In 2019, I began to expand even more when entering the career of university technology in programming in Avellaneda UTN-FRA from Avellaneda."],
      phrase: "“ My goal is to highlight in the contribution of high quality software development in backend or frontend profiles ”"
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {
  }


  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataAbout.es;
    }else if(this.auth.languajeSelect == 'en'){
      this.data = this.dataAbout.en;
    }else{
      this.data = this.dataAbout.br;
    }
    return true;
  }
}
