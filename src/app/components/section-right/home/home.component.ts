import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  firstName: string = "Jhossymar";
  lastName: string = "Balderrama Rocha";
  profesion: any = ["Desarrollador", "Developer"];
  typeProfesion: string = "Full Stack";

  dataHome: any = {
    es: [
      "Bienvenidos a mi portafolio",
      "Hola, soy",
      this.firstName + ' ' + this.lastName,
      "y yo soy un",
      this.profesion[0] + ' ' + this.typeProfesion,
      this.profesion[0],
      this.typeProfesion,
      "Contáctame"],
    en: [
      "Welcome to my portfolio",
      "Hi, i'm",
      this.firstName + ' ' + this.lastName,
      "and i'm a",
      this.profesion[1] + ' ' + this.typeProfesion,
      this.profesion[1],
      this.typeProfesion,
      "Contact me"
    ]
  }

  constructor(public auth: AuthService) {
    (<HTMLElement> document.getElementById("en")).classList.add("select-languaje");
  }

  selectlanguaje(langSelect:string):void{
    this.auth.languajeSelect = langSelect;
    (<HTMLElement> document.getElementById(langSelect)).classList.add("select-languaje");    

    this.auth.languajes.forEach((lang: any) => {
      if(lang != langSelect){
        (<HTMLElement> document.getElementById(lang)).classList.remove("select-languaje");
      }
    });
  }
}
