import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  company: string =  "CA VLB s.a.";
  year: string = "2017 - 2019";
  technologies: any = ["Genexus Evo 2, Evo 3 y 9","Joomla 2.5v - 3.0v"];

  dataExperience: any = {
    es:{
      functionIn: "Desarrollador de software en Genexus, creacion y optimizacion de aplicaciones multi plataforma.",
      description: ["Colaboracion en equipo para conocer los requisitos y las especificaciones del cliente.", "Resolucion de problemas complejos utilizando las ultimas tencnologias moviles, web.", "Codificacion eficaz de cambios y alteraciones de software en base a especificaciones.", "Desarrollo y presentacion de conclusiones y soluciones."],
      titleTechnologies: "Tecnologias utilizadas:",
    },
    en:{
      functionIn: "Software developer in Genexus, creation and optimization of Multiple platform applications.",
      description: ["Team collaboration to know the requirements and customer specifications.", "Resolution of complex problems using the last mobile technologies, web.", "Effective coding of changes and software alterations based on specifications.", "Development and presentation of conclusions and solutions."],
      titleTechnologies: "Technology used:",
    }
  }

  constructor(public auth: AuthService) {

  }
}
