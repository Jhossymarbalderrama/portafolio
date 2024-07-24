import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  company: string = "CA VLB s.a.";
  year: string = "2016 - 2019";
  technologies: any = ["Developer", "Soporte IT"];

  dataExperience: any = {
    en: {
      title: "Experience",
      company: this.company,
      year: this.year,
      technologies: this.technologies,
      sections: [
        {title: "Software developer at GeneXus", functions:["Creation and optimization of cross-platform applications.", "Development and maintenance of Web systems in <b>GeneXus Evolution 2</b> and <b>3</b>.", "Development of Win systems in <b>GeneXus 9</b>."]},
        {title: "Web developer with Joomla", functions: ["Development and maintenance of web pages using <b>Joomla</b>."]},
        {title:"Database managment", functions: ["Basic management of <b>MySQL</b> and <b>SQL Server</b>."]},
        {title:"IT support", functions: ["Implementation and updating of systems.","Repairs and maintenance of software","Data transfer and backup execution.","Technical troubleshooting for software and hardware."]}
      ],      
      titleEmpresa: "Web Company",
    },
    es: {
      title: "Experiencia",
      company: this.company,
      year: this.year,
      technologies: this.technologies,
      sections: [
        {title: "Desarrollador de Software en GeneXus", functions:["Creación y optimización de aplicaciones multiplataforma.", "Desarrollo y mantenimiento de sistemas Web en <b>GeneXus Evolution 2</b> y <b>3</b>.", "Desarrollo de sistemas Win en <b>GeneXus 9</b>."]},
        {title: "Desarrollador Web con Joomla", functions: ["Desarrollo y mantenimiento de páginas web utilizando <b>Joomla</b>."]},
        {title:"Gestión de Bases de Datos", functions: ["Manejo básico de <b>MySQL</b> y <b>SQL Server</b>."]},
        {title:"Soporte IT", functions: ["Implementación y actualización de sistemas.","Reparaciones y mantenimiento de programas.","Transferencia de datos y realización de copias de seguridad.","Resolución de problemas técnicos en software y hardware."]}
      ], 
      titleEmpresa: `Web Empresa`,
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {

  }

  changeLanguaje(): boolean {
    if (this.auth.languajeSelect == 'es') {
      this.data = this.dataExperience.es;
    } else {
      this.data = this.dataExperience.en;
    }
    return true;
  }
}
