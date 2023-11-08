import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  dataProject: any = {
    es:{
      title: "Proyectos",
      subtitle: "Blog",
      description: "Los siguientes proyectos están disponibles en mi repositorio de Github.",
      petfoodpremium: {
        title: "Pet Food Premium",
        subtitle: "Web Full Stack",
        description: "Sitio web dedicado a los distribuidores de alimentos para mascotas."
      },
      tasklist: {
        title: "Lista de tareas",
        subtitle: "Web",
        description: "Un sitio web dedicado para guardar sus tareas personales diarias."
      },
      weather: {
        title: "Clima",
        subtitle: "Web",
        description: "Sitio web para consultar el clima del área de Avellaneda (Buenos Aires)"
      },
      polorun: {
        title: "Polo Run",
        subtitle: "Game",
        description: "Juego de supervivencia, desarrollado en JS, HTML y CSS."
      },
      stonepaperscissors: {
        title: "Piedra Papel Tijera",
        subtitle: "Game",
        description: "Piedra, papel y tijeras, desarrolladas en JS, HTML y CSS."
      },
      calculator: {
        title: "Calculadora",
        subtitle: "Web",
        description: "Calculadora en línea que resuelve problemas matemáticos básicos, desarrollados en JS, HTML y CSS."
      },
      clock: {
        title: "Reloj",
        subtitle: "Web",
        description: "Un sitio web simple que muestra la hora local, desarrollada en JS, HTML y CSS."
      }
    },
    en:{
      title: "Projects",
      subtitle: "Blog",
      description: "The following projects are available in my github repository.",
      petfoodpremium: {
        title: "Pet Food Premium",
        subtitle: "Web Full Stack",
        description: "Website dedicated to pet food distributors."
      },
      tasklist: {
        title: "Task List",
        subtitle: "Web",
        description: "A dedicated website to save your daily personal tasks."
      },
      weather: {
        title: "Weather",
        subtitle: "Web",
        description: "Website to consult the climate of the Avellaneda area (Buenos Aires)."
      },
      polorun: {
        title: "Polo Run",
        subtitle: "Game",
        description: "Survival game, developed in JS, HTML and CSS."
      },
      stonepaperscissors: {
        title: "Stone Paper Scissors",
        subtitle: "Game",
        description: "Stone, paper and scissors, developed in JS, HTML and CSS."
      },
      calculator: {
        title: "Calculator",
        subtitle: "Web",
        description: "Online calculator that solves basic mathematical problems, developed in JS, HTML and CSS."
      },
      clock: {
        title: "Clock",
        subtitle: "Web",
        description: "A simple website showing the local time, developed in JS, HTML and CSS."
      }
    },
    br:{
      title: "Projects",
      subtitle: "Blog",
      description: "The following projects are available in my github repository.",
      petfoodpremium: {
        title: "Pet Food Premium",
        subtitle: "Web Full Stack",
        description: "Website dedicated to pet food distributors."
      },
      tasklist: {
        title: "Task List",
        subtitle: "Web",
        description: "A dedicated website to save your daily personal tasks."
      },
      weather: {
        title: "Weather",
        subtitle: "Web",
        description: "Website to consult the climate of the Avellaneda area (Buenos Aires)."
      },
      polorun: {
        title: "Polo Run",
        subtitle: "Game",
        description: "Survival game, developed in JS, HTML and CSS."
      },
      stonepaperscissors: {
        title: "Stone Paper Scissors",
        subtitle: "Game",
        description: "Stone, paper and scissors, developed in JS, HTML and CSS."
      },
      calculator: {
        title: "Calculator",
        subtitle: "Web",
        description: "Online calculator that solves basic mathematical problems, developed in JS, HTML and CSS."
      },
      clock: {
        title: "Clock",
        subtitle: "Web",
        description: "A simple website showing the local time, developed in JS, HTML and CSS."
      }
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {

  }

  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataProject.es;
    }else if(this.auth.languajeSelect == 'en'){
      this.data = this.dataProject.en;
    }else{
      this.data = this.dataProject.br;
    }
    return true;
  }
}
