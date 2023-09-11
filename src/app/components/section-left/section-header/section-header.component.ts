import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit{
  


  title: string = "";
  firstName: string = "";
  lastName: string = "";
  description: string = "";

  data: any  = {
    es:{
      title: "Mi Portafolio",
      firstName: "Jhossymar",
      lastName: "Balderrama Rocha",
      description: "Desarrollador Full Stack"
    },
    en:{
      title: "My Portfolio",
      firstName: "Jhossymar",
      lastName: "Balderrama Rocha",
      description: "Full Stack Developer"
    }
  }

  constructor(public auth : AuthService){  
    this.auth.languajeSelect = "en";
  }
  
  ngOnInit(): void {    
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
