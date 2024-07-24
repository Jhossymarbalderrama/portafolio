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
  edad: number = new Date().getFullYear() - 1998;
  dataAbout: any = {
    es: {
      firstName: this.firstName,
      lastName: this.lastName,
      profession: "Desarrollador Full Stack",
      phone: this.phone,
      email: this.email,
      location: this.location,
      btn: "Descargar CV",
      description: [
        `¡Hola! Soy <strong>Jhossymar</strong>, aunque también solo me llaman <strong>Jhossy</strong>. Tengo ${this.edad} años y soy de Buenos Aires, Argentina.`,
        `Después de completar mis estudios secundarios, tuve la oportunidad de realizar una pasantía en <strong><a href='#experience'>CA-VLB s.a.</a></strong>, una empresa de desarrollo de software. Durante este periodo, pude ampliar mis conocimientos en áreas clave como soporte IT y en el desarrollo de software.`,
        `En el año 2023, me gradué de la carrera de <strong>Técnico Universitario en Programación</strong> en la Universidad Tecnológica Nacional de Avellaneda.`,
        `Desde el comienzo de mi carrera, he estado inmerso en el mundo de la tecnología, combinando mi formación académica 
      y mi experiencia laboral para desarrollar soluciones innovadoras y eficientes. 
      Me apasiona trabajar en equipo, ya que creo firmemente que la colaboración potencia el 
      desarrollo de proyectos y nos permite crecer juntos, tanto profesional como personalmente.`,
      ],
      phrase: "“Aspiro a un puesto de desarrollador Full Stack donde pueda aprovechar mis habilidades en Angular, Spring Boot y MySQL para crear soluciones tecnológicas innovadoras que mejoren la experiencia del usuario y aborden los desafíos empresariales. Además, busco contribuir a un entorno de trabajo colaborativo y fomentar el crecimiento grupal, impulsando así el éxito colectivo del equipo y de la empresa.”"
    },
    en: {
      firstName: this.firstName,
      lastName: this.lastName,
      profession: "Full Stack Developer",
      phone: this.phone,
      email: this.email,
      location: this.location,
      btn: "Download CV",
      description: [
        `Hello! I'm <strong>Jhossymar</strong>, although they also call me simply <strong>Jhossy</strong>. I am ${this.edad} years old and I am from Buenos Aires, Argentina.`,
        `After finishing my secondary studies, I had the opportunity to do an internship at <strong><a href='#experience'>CA-VLB s.a.</a></strong>, a software development company. During this period, I was able to expand my knowledge in key areas such as IT support and software development.`,
        `In 2023 I graduated as a <strong>University Technician in Programming</strong> from the National Technological University of Avellaneda.`,
        `Since the beginning of my career I have been immersed in the world of technology, 
        combining my academic training and work experience to develop innovative and efficient solutions. 
        I am passionate about working as a team, since I firmly believe that collaboration enhances the 
        development of projects and allows us to grow together, both professionally and personally.`,
      ],
      phrase: "“I aspire to a Full Stack Developer position where I can leverage my skills in Angular, Spring Boot, and MySQL to create innovative technological solutions that enhance user experience and address business challenges. Additionally, I seek to contribute to a collaborative work environment and foster group growth, thereby driving the collective success of the team and the company.”"
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {
  }


  changeLanguaje(): boolean {
    if (this.auth.languajeSelect == 'es') {
      this.data = this.dataAbout.es;
    } else {
      this.data = this.dataAbout.en;
    }
    return true;
  }
}
