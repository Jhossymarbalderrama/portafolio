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
      button: "Descargar CV",
      description: ["Hola, mi nombre es Jhossymar o tambien me dicen Jhossy, tengo 25 años de edad y soy de avellaneda.","Mi formación siempre fue sobre la tecnología, cuando finalizaba mis estudios secundarios tuve la oportunidad de ir como pasante a una empresa de desarrollo de software, ahi pude expandir mas mis conocimientos sobre la programacion y el desarrollo de aplicaciones para distintas plataformas.",
      "En el 2019, comencé a expandirme aún más ingresando a la carrera de la tecnicatura Universitaria en Programación en la UTN-FRA de avellaneda."],                  
      phrase: "“ Mi objetivo es resaltar en la contribución del desarrollo de software de alta calidad en los perfiles de backend o frontend ”"
    },
    en: {
      firstName: this.firstName,
      lastName: this.lastName,
      profession: "Full Stack Developer",
      button: "Download CV",
      description: ["Hello, my name is Jhossymar or also tell me Jhossy, I am 25 years old and I'm from Avellaneda.",
                    "My training was always about technology, when I finished my secondary studies I had the opportunity to go as an intern to a software development company, there I could expand my knowledge about the programming and the development of applications for different platforms.",
                    "In 2019, I began to expand even more when entering the career of university technology in programming in Avellaneda UTN-FRA from Avellaneda."],
      phrase: "“ My goal is to highlight in the contribution of high quality software development in backend or frontend profiles ”"
    }
  }

  constructor(public auth: AuthService) {

  }
}
