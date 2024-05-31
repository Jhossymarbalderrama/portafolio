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
      phrase: "“Mi objetivo es crear y desarrollar software que satisfaga y resuelva problemas en las áreas Backend y Frontend, colaborando estrechamente con varios equipos y promoviendo el crecimiento conjunto con mis compañeros de proyecto, utilizando conocimientos especializados para lograr soluciones efectivas y eficientes”"
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
      phrase: "“My goal is to create and develop software that satisfies and solves problems in the Backend and Frontend areas, collaborating closely with various teams and promoting joint growth with my project colleagues, using specialized knowledge to achieve effective and efficient solutions”"
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {
  }


  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataAbout.es;
    }else{
      this.data = this.dataAbout.en;
    }
    return true;
  }
}
