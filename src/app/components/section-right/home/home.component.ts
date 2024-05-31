import { Component, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataHome: any = {
    es:{
      title: "Bienvenidos a mi portafolio",
      presentationH: "Hola, mi nombre es ",
      firstName: "Jhossymar",
      lastName: "Balderrama Rocha",
      presentationF: "Soy un ",
      profesion: "Desarrollador Full Stack",
      btn: "Contáctame"
    },
    en:{
      title: "Welcome to my portfolio",
      presentationH: "Hi, i'm ", 
      firstName: "Jhossymar",
      lastName: "Balderrama Rocha",
      presentationF: "and i'm a ", 
      profesion: "Full Stack Developer",
      btn: "Contact me"
    }
  };

  data: any = {};

  constructor(public auth: AuthService) {       
  }


  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataHome.es;
    }else{
      this.data = this.dataHome.en;
    }
    
    return true;
  }
}
