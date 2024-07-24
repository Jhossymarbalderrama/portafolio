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
    tailwindCSS: 'https://camo.githubusercontent.com/3b41d3ae73bc489dbb2be32e772cc814e3a76e372027056c72e5b970c04684a5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465',
    javascript: 'https://camo.githubusercontent.com/84372c7d2f1a7308844360ecad82d49b3f6cbc068a0c5e31aeea6ca5344b77ba/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b',
    html: 'https://camo.githubusercontent.com/bfe6a48836e87b13a16f1f56f88fee428475c2ac29247992ec9b8bcc7154f881/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465',
    css: 'https://camo.githubusercontent.com/472c222e8f240a48ae51cd9b082a1b857be809dcd851a25150890c2da50c13a5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465'
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
          description: "Portafolio personal desarrollado utilizando Angular y Bootstrap 5, alojado en Firebase. Este proyecto está diseñado para ser completamente responsivo y dinámico, destacando mis habilidades en el desarrollo web.",
          urlWeb:'https://jhossymarbalderrama-portafolio.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/portafolio',
          img:'https://i.postimg.cc/65fJJ0Xb/336213848-cdc832d5-378b-4bf1-8c39-f96f65b26f46.png',
          technologies: [
            this.tools.angular,
            this.tools.bootstrap,
            this.tools.firebase
          ]
        },        
        {
          title: "Apex Store",
          subtitle: "Desarrollo Full Stack",
          description: "Una tienda online completa construida con Angular, Tailwind CSS y Spring Boot en el backend. Utiliza Firebase para el hosting y una base de datos MySQL para gestionar los productos y pedidos.",
          urlWeb:'https://e-commerce-ac291.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/ApexStore-Ecommerce-Front',
          img: "https://i.postimg.cc/RVR8bZ7j/330834348-c29e4dbb-fbb6-4d91-8fb1-bc1732769c57.png",
          technologies: [
            this.tools.angular,
            this.tools.springBoot,
            this.tools.tailwindCSS,
            this.tools.firebase,
            this.tools.mysql
          ]
        },
        {
          title: "Pet Food Premium",
          subtitle: "Desarrollo Full Stack",
          description: "Una aplicación web completa desarrollada con Angular para el frontend y Node.js con Express para el backend.",
          urlWeb: 'https://pet-food-premium-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/PetFood-Distributor-Front',
          img: 'https://i.postimg.cc/4yGLBDmf/337773382-2c414fea-ec28-4676-a001-8d95b3e6f677.png',
          technologies: [
            this.tools.angular,
            this.tools.nodejs,
            this.tools.bootstrap,
            this.tools.mysql
          ]
        },
        {
          title: "Clínica Online",
          subtitle: "Frontend Web",
          description: "Clinica Online es una pagina web de turnos para una clinica. El sistema de turnos es flexible y facil y rapido ya sea para el paciente que va sacar un turno o el especialista.",
          urlWeb: "https://tp-clinicaonline-ef480.web.app/",
          urlRepo: "https://github.com/Jhossymarbalderrama/TP-ClinicaOnline",
          img: "https://i.postimg.cc/c4skYGpT/351792427-db53292e-1fc1-41af-b3de-24b519ed50c2.png",
          technologies: [
            this.tools.angular,
            this.tools.bootstrap,
            this.tools.firebase
          ]
        },
        {
          title: "Movies Online ",
          subtitle: "Frontend Web",
          description: 'En grupo, desarrollamos una plataforma de películas online usando solo HTML, CSS, y JavaScript puro (vanilla JS) como parte del curso Codo a Codo. ',
          urlWeb: 'https://jhossymarbalderrama.github.io/TP0_CAC_24100_Movies_page_frontend/',
          urlRepo:'https://github.com/Jhossymarbalderrama/TP0_CAC_24100_Movies_page_frontend',
          img: 'https://i.postimg.cc/sXYKQTKt/339382768-f7c2698f-5749-4e98-a32b-4105e98c7e36.png',
          technologies: [
            this.tools.javascript,
            this.tools.html,
            this.tools.css,
            this.tools.bootstrap,
            this.tools.apiRest
          ]
        },
        {
          title: "Clima",
          subtitle: "Frontend Web",
          description: "Una aplicación web desarrollada en Angular que consume una API de clima para proporcionar información meteorológica actualizada. Utiliza Firebase para el alojamiento y Bootstrap 5 para el diseño responsivo.",
          urlWeb:'https://weather-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/weather',
          img:'https://i.postimg.cc/yxnPnWMj/273046404-89125e9f-32c1-4548-b2fc-0375f56ee339.png',
          technologies: [
            this.tools.angular,
            this.tools.firebase,
            this.tools.bootstrap,
            this.tools.apiRest
          ]
        }   
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
          description: "Personal portfolio developed using Angular and Bootstrap 5, hosted on Firebase. This project is designed to be fully responsive and dynamic, showcasing my skills in web development.",
          urlWeb:'https://jhossymarbalderrama-portafolio.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/portafolio',
          img:'https://i.postimg.cc/65fJJ0Xb/336213848-cdc832d5-378b-4bf1-8c39-f96f65b26f46.png',
          technologies: [
            this.tools.angular,
            this.tools.bootstrap,
            this.tools.firebase
          ]
        },        
        {
          title: "Apex Store",
          subtitle: "Full Stack Development",
          description: "A complete online store built with Angular, Tailwind CSS and Spring Boot on the backend. It uses Firebase for hosting and a MySQL database to manage products and orders.",
          urlWeb:'https://e-commerce-ac291.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/ApexStore-Ecommerce-Front',
          img: "https://i.postimg.cc/RVR8bZ7j/330834348-c29e4dbb-fbb6-4d91-8fb1-bc1732769c57.png",
          technologies: [
            this.tools.angular,
            this.tools.springBoot,
            this.tools.tailwindCSS,
            this.tools.firebase,
            this.tools.mysql
          ]
        },
        {
          title: "Pet Food Premium",
          subtitle: "Full Stack Development",
          description: "A complete web application developed with Angular for the frontend and Node.js with Express for the backend.",
          urlWeb: 'https://pet-food-premium-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/PetFood-Distributor-Front',
          img: 'https://i.postimg.cc/4yGLBDmf/337773382-2c414fea-ec28-4676-a001-8d95b3e6f677.png',
          technologies: [
            this.tools.angular,
            this.tools.nodejs,
            this.tools.bootstrap,
            this.tools.mysql,
            this.tools.apiRest
          ]
        },
        {
          title: "Clínic Online",
          subtitle: "Frontend Web",
          description: "Clínica Online is a web page for scheduling appointments at a clinic. The appointment system is flexible, easy, and fast, whether for the patient booking an appointment or the specialist.",
          urlWeb: "https://tp-clinicaonline-ef480.web.app/",
          urlRepo: "https://github.com/Jhossymarbalderrama/TP-ClinicaOnline",
          img: "https://i.postimg.cc/c4skYGpT/351792427-db53292e-1fc1-41af-b3de-24b519ed50c2.png",
          technologies: [
            this.tools.angular,
            this.tools.bootstrap,
            this.tools.firebase
          ]
        },               
        {
          title: "Movies Online ",
          subtitle: "Frontend Web",
          description: 'As a group, we developed an online movie platform using only HTML, CSS and pure JavaScript (vanilla JS) as part of the Codo A Codo course.',
          urlWeb: 'https://jhossymarbalderrama.github.io/TP0_CAC_24100_Movies_page/index.html',
          urlRepo:'https://github.com/Jhossymarbalderrama/TP0_CAC_24100_Movies_page',
          img: 'https://i.postimg.cc/sXYKQTKt/339382768-f7c2698f-5749-4e98-a32b-4105e98c7e36.png',
          technologies: [
            this.tools.javascript,
            this.tools.html,
            this.tools.css,
            this.tools.bootstrap,
            this.tools.apiRest
          ]
        },        
        {
          title: "Weather",
          subtitle: "Web Frontend",
          description: "A web application developed in Angular that consumes a weather API to provide up-to-date weather information. It uses Firebase for hosting and Bootstrap 5 for responsive design.",
          urlWeb:'https://weather-jbr.web.app/',
          urlRepo: 'https://github.com/Jhossymarbalderrama/weather',
          img:'https://i.postimg.cc/yxnPnWMj/273046404-89125e9f-32c1-4548-b2fc-0375f56ee339.png',
          technologies: [
            this.tools.angular,
            this.tools.firebase,
            this.tools.bootstrap,
            this.tools.apiRest
          ]
        }        
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
