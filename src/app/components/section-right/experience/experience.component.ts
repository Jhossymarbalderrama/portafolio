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
      functionIn: "Software developer in Genexus, creation and optimization of multiple platform applications.",
      description: ["Web systems development in Genexus Evolution 2 and 3.",
                    "Win the development of systems in Genexus 9.", 
                    "Web pages development in Joomla.",
                    "Basic Management of MySQL and SQL Server.",
                    "Technical support software and hardware."
                  ],
      titleTechnologies: "Technology used:",
    },
    es:{
      title: "Experiencia",
      company: this.company,
      year: this.year,
      technologies: this.technologies,
      functionIn: "Desarrollador de software en GeneXus, creacion y optimizacion de aplicaciones multi plataforma.",
      description: ["Desarrollo de sistemas Web en GeneXus Evolution 2 y 3.",
                    "Desarrollo de sistemas Win en GeneXus 9.", 
                    "Desarrollo de páginas web en Joomla.",
                    "Manejo básico de MySQL y SQL Server.",
                    "Soporte técnico software y hardware."
                  ],
      titleTechnologies: "Tecnologias utilizada:",
    },
    br:{
      title: "Experiência",
      company: this.company,
      year: this.year,
      technologies: this.technologies,
      functionIn: "Desenvolvedor de software na Genexus, criando e otimizando aplicações em múltiplas plataformas.",
      description: ["Desenvolvimento de sistemas web em Genexus Evolution 2 e 3.",
                    "Desenvolvimento de sistemas win em Genexus 9.", 
                    "Desenvolvimento de páginas web em Joomla.",
                    "Gerenciamento Básico de MySQL e SQL Server.",
                    "Software e hardware de suporte técnico."
                  ],
      titleTechnologies: "Tecnologia usada:",
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {

  }

  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataExperience.es;
    }else if(this.auth.languajeSelect == 'en'){
      this.data = this.dataExperience.en;
    }else{
      this.data = this.dataExperience.br;
    }
    return true;
  }
}
