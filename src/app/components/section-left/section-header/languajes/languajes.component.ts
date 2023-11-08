import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-languajes',
  templateUrl: './languajes.component.html',
  styleUrls: ['./languajes.component.css']
})
export class LanguajesComponent implements OnInit {

  languaje: string = "es";
  
  constructor(private auth: AuthService) {

  }


  ngOnInit(): void {
    this.selectlanguaje(this.languaje);    
  }

  selectlanguaje(langSelect: string): void {
    this.auth.languajeSelect = langSelect;
    (<HTMLElement>document.getElementById(langSelect))?.classList.add("select-languaje");

    this.auth.languajes.forEach((lang: any) => {
      if (lang != langSelect) {
        (<HTMLElement>document.getElementById(lang))?.classList.remove("select-languaje");
      }
    });
  }
}


