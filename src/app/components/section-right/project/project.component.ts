import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  tools: any = {
    angular: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white',
    nodejs: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
    firebase: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black',
    bootstrap: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
    mysql: 'https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white',
    apiRest: 'https://github.com/Jhossymarbalderrama/weather/assets/52534649/9d386143-cb70-4a9b-9f71-1823ff950dfd',
    springBoot: 'https://camo.githubusercontent.com/c2a58428fe9b38967494da3b0a098f1d28f9cc395e3bbf123cbc14fb36bc1b07/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f737072696e672d2532333644423333462e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d737072696e67266c6f676f436f6c6f723d7768697465',
    tailwindCSS: 'https://camo.githubusercontent.com/3b41d3ae73bc489dbb2be32e772cc814e3a76e372027056c72e5b970c04684a5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465'
  };
  
  dataProject: any = {
    es: {
      title: "Proyectos",
      subtitle: "Blog",
      description: "Los siguientes proyectos están disponibles en mi repositorio de Github.",
      projects: [        
        {
          title: "Portafolio",
          subtitle: "Web",
          description: "Mi portafolio web desarrollado en Angular.",
          urlWeb:'https://jhossymarbalderrama-portafolio.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/portafolio',
          img:'https://github.com/Jhossymarbalderrama/TP-ClinicaOnline/assets/52534649/47597276-0688-4e0f-82d4-25fc4606c6e3',
          technologies: [
            this.tools.angular,
            this.tools.bootstrap,
            this.tools.firebase
          ]
        },
        {
          title: "Pet Food Premium",
          subtitle: "Web Full Stack",
          description: "Sitio web dedicado a los distribuidores de alimentos para mascotas.",
          urlWeb: 'https://pet-food-premium-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/PetFood-Distributor-Front',
          img: 'https://github.com/Jhossymarbalderrama/petfood/assets/52534649/2f2ddd18-b042-4433-9edb-91efed8f5843',
          technologies: [
            this.tools.angular,
            this.tools.nodejs,
            this.tools.bootstrap,
            this.tools.mysql,
            this.tools.apiRest
          ]
        },
        {
          title: "Apex Store",
          subtitle: "Web Full Stack",
          description: "Tienda Online full stack, desarrollada en angular, spring boot, mysql.",
          urlWeb:'https://e-commerce-ac291.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/ApexStore-Ecommerce-Front',
          img: "https://github.com/Jhossymarbalderrama/ApexStore-Ecommerce-Front/assets/52534649/c29e4dbb-fbb6-4d91-8fb1-bc1732769c57",
          technologies: [
            this.tools.angular,
            this.tools.springBoot,
            this.tools.tailwindCSS,
            this.tools.firebase,
            this.tools.mysql
          ]
        },
        {
          title: "Clima",
          subtitle: "Web",
          description: "Sitio web para consultar el clima del área de Avellaneda (Buenos Aires)",
          urlWeb:'https://weather-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/weather',
          img:'https://github.com/Jhossymarbalderrama/weather/assets/52534649/89125e9f-32c1-4548-b2fc-0375f56ee339',
          technologies: [
            this.tools.angular,
            this.tools.firebase,
            this.tools.bootstrap,
            this.tools.apiRest
          ]
        },        
        {
          title: "Lista de tareas",
          subtitle: "Web",
          description: "Un sitio web dedicado para guardar sus tareas personales diarias.",
          urlWeb:'https://jhossymarbalderrama.github.io/tasksList/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/tasksList',
          img: 'https://github.com/Jhossymarbalderrama/tasksList/assets/52534649/88880175-20a4-4a75-b91a-839ff340554b',
          technologies: [
            this.tools.angular,
            this.tools.bootstrap
          ]
        },        
      ]
    },
    en: {
      title: "Projects",
      subtitle: "Blog",
      description: "The following projects are available in my github repository.",
      projects: [        
        {
          title: "Portfolio",
          subtitle: "Web",
          description: "My web portfolio developed in Angular.",
          urlWeb:'https://jhossymarbalderrama-portafolio.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/portafolio',
          img:'https://github.com/Jhossymarbalderrama/TP-ClinicaOnline/assets/52534649/47597276-0688-4e0f-82d4-25fc4606c6e3',
          technologies: [
            this.tools.angular,
            this.tools.bootstrap,
            this.tools.firebase
          ]
        },
        {
          title: "Pet Food Premium",
          subtitle: "Web Full Stack",
          description: "Website dedicated to pet food distributors.",
          urlWeb: 'https://pet-food-premium-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/PetFood-Distributor-Front',
          img: 'https://github.com/Jhossymarbalderrama/petfood/assets/52534649/2f2ddd18-b042-4433-9edb-91efed8f5843',
          technologies: [
            this.tools.angular,
            this.tools.nodejs,
            this.tools.bootstrap,
            this.tools.mysql,
            this.tools.apiRest
          ]
        },
        {
          title: "Apex Store",
          subtitle: "Web Full Stack",
          description: "Full stack online store, developed in angular, spring boot, mysql.",
          urlWeb:'https://e-commerce-ac291.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/ApexStore-Ecommerce-Front',
          img: "https://private-user-images.githubusercontent.com/52534649/330834348-c29e4dbb-fbb6-4d91-8fb1-bc1732769c57.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU5NjE1MDQsIm5iZiI6MTcxNTk2MTIwNCwicGF0aCI6Ii81MjUzNDY0OS8zMzA4MzQzNDgtYzI5ZTRkYmItZmJiNi00ZDkxLThmYjEtYmMxNzMyNzY5YzU3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTE3VDE1NTMyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE5NmQ2N2EwNWU1YTI1NWVhZTVhMjE4NDFhYWU1NDUyMjIyMmVjZWU4YTM4NjRjNTRlMDA1MzViZTBhNTNjNjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.E0_7rHdK-Dm0AIwmm3s02QI7fNQF4PYxgbqxnIJBofg",
          technologies: [
            this.tools.angular,
            this.tools.springBoot,
            this.tools.tailwindCSS,
            this.tools.firebase,
            this.tools.mysql
          ]
        },
        {
          title: "Weather",
          subtitle: "Web",
          description: "Website to check the climate of the Avellaneda area (Buenos Aires)",
          urlWeb:'https://weather-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/weather',
          img:'https://github.com/Jhossymarbalderrama/weather/assets/52534649/89125e9f-32c1-4548-b2fc-0375f56ee339',
          technologies: [
            this.tools.angular,
            this.tools.firebase,
            this.tools.bootstrap,
            this.tools.apiRest
          ]
        },        
        {
          title: "task list",
          subtitle: "Web",
          description: "A dedicated website to save your daily personal tasks.",
          urlWeb:'https://jhossymarbalderrama.github.io/tasksList/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/tasksList',
          img: 'https://github.com/Jhossymarbalderrama/tasksList/assets/52534649/88880175-20a4-4a75-b91a-839ff340554b',
          technologies: [
            this.tools.angular,
            this.tools.bootstrap
          ]
        },        
      ]
    },
    br: {
      title: "Projetos",
      subtitle: "Blogue",
      description: "Os seguintes projetos estão disponíveis em meu repositório github.",
      projects: [        
        {
          title: "Portfólio",
          subtitle: "Web",
          description: "Mi portafolio web desarrollado en Angular.",
          urlWeb:'https://jhossymarbalderrama-portafolio.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/portafolio',
          img:'https://github.com/Jhossymarbalderrama/TP-ClinicaOnline/assets/52534649/47597276-0688-4e0f-82d4-25fc4606c6e3',
          technologies: [
            this.tools.angular,
            this.tools.bootstrap,
            this.tools.firebase
          ]
        },
        {
          title: "Pet Food Premium",
          subtitle: "Web Full Stack",
          description: "Site dedicado aos distribuidores de alimentos para animais de estimação.",
          urlWeb: 'https://pet-food-premium-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/PetFood-Distributor-Front',
          img: 'https://github.com/Jhossymarbalderrama/petfood/assets/52534649/2f2ddd18-b042-4433-9edb-91efed8f5843',
          technologies: [
            this.tools.angular,
            this.tools.nodejs,
            this.tools.bootstrap,
            this.tools.mysql,
            this.tools.apiRest
          ]
        },
        {
          title: "Apex Store",
          subtitle: "Web Full Stack",
          description: "Loja online full stack, desenvolvida em angular, spring boot, mysql.",
          urlWeb:'https://e-commerce-ac291.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/ApexStore-Ecommerce-Front',
          img: "https://private-user-images.githubusercontent.com/52534649/330834348-c29e4dbb-fbb6-4d91-8fb1-bc1732769c57.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU5NjE1MDQsIm5iZiI6MTcxNTk2MTIwNCwicGF0aCI6Ii81MjUzNDY0OS8zMzA4MzQzNDgtYzI5ZTRkYmItZmJiNi00ZDkxLThmYjEtYmMxNzMyNzY5YzU3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTE3VDE1NTMyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE5NmQ2N2EwNWU1YTI1NWVhZTVhMjE4NDFhYWU1NDUyMjIyMmVjZWU4YTM4NjRjNTRlMDA1MzViZTBhNTNjNjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.E0_7rHdK-Dm0AIwmm3s02QI7fNQF4PYxgbqxnIJBofg",
          technologies: [
            this.tools.angular,
            this.tools.springBoot,
            this.tools.tailwindCSS,
            this.tools.firebase,
            this.tools.mysql
          ]
        },
        {
          title: "Clima",
          subtitle: "Web",
          description: "Site para verificar a previsão do tempo na região de Avellaneda (Buenos Aires)",
          urlWeb:'https://weather-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/weather',
          img:'https://github.com/Jhossymarbalderrama/weather/assets/52534649/89125e9f-32c1-4548-b2fc-0375f56ee339',
          technologies: [
            this.tools.angular,
            this.tools.firebase,
            this.tools.bootstrap,
            this.tools.apiRest
          ]
        },        
        {
          title: "Lista de afazeres",
          subtitle: "Web",
          description: "Um site dedicado para salvar suas tarefas pessoais diárias.",
          urlWeb:'https://jhossymarbalderrama.github.io/tasksList/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/tasksList',
          img: 'https://github.com/Jhossymarbalderrama/tasksList/assets/52534649/88880175-20a4-4a75-b91a-839ff340554b',
          technologies: [
            this.tools.angular,
            this.tools.bootstrap
          ]
        },        
      ]
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {

  }

  changeLanguaje(): boolean {
    if (this.auth.languajeSelect == 'es') {
      this.data = this.dataProject.es;
    } else if (this.auth.languajeSelect == 'en') {
      this.data = this.dataProject.en;
    } else {
      this.data = this.dataProject.br;
    }
    return true;
  }

  getProjectsLanguaje(): any{
    if (this.auth.languajeSelect == 'es') {
      return this.dataProject.es.projects;
    } else if (this.auth.languajeSelect == 'en') {
      return this.dataProject.en.projects;
    } 
    return this.dataProject.br.projects;
  }
}
