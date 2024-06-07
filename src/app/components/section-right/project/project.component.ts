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
      description: "Los siguientes proyectos están disponibles en mi repositorio de ",
      projects: [        
        {
          title: "Portafolio",
          subtitle: "Frontend Web",
          description: "Portafolio personal desarrollado utilizando Angular y Bootstrap 5, alojado en Firebase.",
          urlWeb:'https://jhossymarbalderrama-portafolio.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/portafolio',
          img:'https://github.com/Jhossymarbalderrama/portafolio/assets/52534649/cdc832d5-378b-4bf1-8c39-f96f65b26f46',
          technologies: [
            this.tools.angular,
            this.tools.bootstrap,
            this.tools.firebase
          ]
        },
        {
          title: "Pet Food Premium",
          subtitle: "Desarrollo Full Stack",
          description: "Una aplicación web completa desarrollada con Angular para el frontend y Node.js con Express para el backend.",
          urlWeb: 'https://pet-food-premium-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/PetFood-Distributor-Front',
          img: 'https://github.com/Jhossymarbalderrama/portafolio/assets/52534649/2c414fea-ec28-4676-a001-8d95b3e6f677',
          technologies: [
            this.tools.angular,
            this.tools.nodejs,
            this.tools.bootstrap,
            this.tools.mysql
          ]
        },
        {
          title: "Apex Store",
          subtitle: "Desarrollo Full Stack",
          description: "Una tienda online completa construida con Angular, Tailwind CSS y Spring Boot en el backend. Utiliza Firebase para el hosting y una base de datos MySQL para gestionar los productos y pedidos.",
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
          subtitle: "Frontend Web",
          description: "Una aplicación web desarrollada en Angular que consume una API de clima para proporcionar información meteorológica actualizada. Utiliza Firebase para el alojamiento y Bootstrap 5 para el diseño responsivo.",
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
          subtitle: "Frontend Web",
          description: "Una aplicación web simple desarrollada en Angular y Bootstrap 5 que permite a los usuarios gestionar sus tareas diarias.",
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
          subtitle: "Web Frontend",
          description: "Personal portfolio developed using Angular and Bootstrap 5, hosted on Firebase.",
          urlWeb:'https://jhossymarbalderrama-portafolio.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/portafolio',
          img:'https://github.com/Jhossymarbalderrama/portafolio/assets/52534649/cdc832d5-378b-4bf1-8c39-f96f65b26f46',
          technologies: [
            this.tools.angular,
            this.tools.bootstrap,
            this.tools.firebase
          ]
        },
        {
          title: "Pet Food Premium",
          subtitle: "Full Stack Development",
          description: "A complete web application developed with Angular for the frontend and Node.js with Express for the backend.",
          urlWeb: 'https://pet-food-premium-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/PetFood-Distributor-Front',
          img: 'https://github.com/Jhossymarbalderrama/portafolio/assets/52534649/2c414fea-ec28-4676-a001-8d95b3e6f677',
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
          subtitle: "Full Stack Development",
          description: "A complete online store built with Angular, Tailwind CSS and Spring Boot on the backend. It uses Firebase for hosting and a MySQL database to manage products and orders.",
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
          title: "Weather",
          subtitle: "Web Frontend",
          description: "A web application developed in Angular that consumes a weather API to provide up-to-date weather information. It uses Firebase for hosting and Bootstrap 5 for responsive design.",
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
          subtitle: "Web Frontend",
          description: "A simple web application developed in Angular and Bootstrap 5 that allows users to manage their daily tasks.",
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
    } else{
      this.data = this.dataProject.en;
    } 

    return true;
  }

  getProjectsLanguaje(): any{
    if (this.auth.languajeSelect == 'es') {
      return this.dataProject.es.projects;
    } else{
      return this.dataProject.en.projects;
    } 
  }
}
