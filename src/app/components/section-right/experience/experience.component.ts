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
  technologies: any = ["GeneXus Evolution 2, 3", "GeneXus 9","Joomla v2.5 - v3.8"];

  dataExperience: any = {
    en:{
      title: "Experience",
      company: this.company,
      year: this.year,
      technologies: this.technologies,
      functionIn: `Software developer in <strong>Genexus</strong>, creation and optimization of multiple platform applications.`,
      description: [`Web systems development in <strong>Genexus Evolution 2 and 3</strong>.`,
                    `Win the development of systems in <strong>Genexus 9</strong>.`, 
                    `Web pages development in <strong>Joomla</strong>.`,
                    `Basic Management of <strong>MySQL</strong> and <strong>SQL Server</strong>.`,
                    `Technical support software and hardware.`
                  ],
      titleTechnologies: "Technology used:",
    },
    es:{
      title: "Experiencia",
      company: this.company,
      year: this.year,
      technologies: this.technologies,
      functionIn: `Desarrollador de software en <strong>GeneXus</strong>, creacion y optimizacion de aplicaciones multi plataforma.`,
      description: [`Desarrollo de sistemas Web en <strong>GeneXus Evolution 2 y 3</strong>.`,
                    `Desarrollo de sistemas Win en <strong>GeneXus 9</strong>.`, 
                    `Desarrollo de páginas web en <strong>Joomla</strong>.`,
                    `Manejo básico de MySQL y SQL Server.`,
                    `Soporte técnico software y hardware.`
                  ],
      titleTechnologies: "Tecnologias utilizada:",
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {

  }

  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataExperience.es;
    }else{
      this.data = this.dataExperience.en;
    }
    return true;
  }
}
