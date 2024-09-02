import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, viewChild, HostListener } from '@angular/core';
// import { HeaderCanvasComponent } from "./header-canvas/header-canvas.component";
// import { ContentCanvasComponent } from "./content-canvas/content-canvas.component";
// import { FooterCanvasComponent } from "./footer-canvas/footer-canvas.component";
import { Router, NavigationEnd, Route } from "@angular/router";
import { LanguagesComponent } from "./languages/languages.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-off-canvas',
  standalone: true,
  imports: [LanguagesComponent],
  templateUrl: './off-canvas.component.html',
  styleUrl: './off-canvas.component.css'
})
export class OffCanvasComponent implements OnInit, AfterViewInit {
   public menu : any;
  public state_menu: boolean = false; // t: open | f:close
  private off_canvas: any = document.getElementById("off-canvas");

  public sectionActive: string | undefined = "";

  constructor(
    private auth: AuthService,
    private router: Router){      
      this.auth.data$.subscribe( data => {
        if(data){
          this.menu = auth.getDataMenu;
        }
      })
  }

  ngOnInit(): void {
    // ! Comment line code view off-canvas / viewn't off-canvas
    this.toggleMenu(); 

    this.router.events.subscribe( event => {
      if(event instanceof NavigationEnd){
        let url = event.urlAfterRedirects.split('#')[1];
        this.sectionActive = url;
      }
    })
  }
    
  ngAfterViewInit(): void {

  }

  public isActive(section:string):boolean{
    return this.sectionActive === section;
  }

  public toggleMenu(): void {
    this.state_menu = !this.state_menu;
    let btn_close = document.getElementById('icon-close'); // ! app off-canvas
    let btn_open = document.getElementById('icon-open'); // ! app off-canvas


    let off_canvas = document.getElementById("off-canvas"); // ! app component 
    let contenido_web = document.getElementById('contenido-web'); // ! app content-web
    
    let off_canvas_body = document.getElementById("off-canvas-body"); // ! app off-canvas (acá)

    // ? Items View/Hidden
    let off_canvas_items = document.querySelectorAll('.canvas-item'); // ! Class (acá) para ocultar items del off-canvas flags, off-canvas-header, off-canvas-body, off-canvas-footer
    let off_canvas_icos = document.getElementById('off-canvas-icons'); // ! app off-canvas (acá) para view/viewn't icons
    let off_canvas_socials = document.getElementById('off-canvas-socials'); // ! app off-canvas (acá) para view/viewn't icons socials

    if (this.state_menu) {
      // state : Abierto --> Cierro el off canvas

      if ( off_canvas) {
        off_canvas.style.minWidth = "4vw";
      }
      if(contenido_web){
        contenido_web.style.width = "96vw";
      }
      btn_close?.classList.remove('block');
      btn_open?.classList.remove('hidden');
      btn_close?.classList.add('hidden');
      btn_open?.classList.add('block');
      off_canvas_body?.classList.add("off-canvas-hidde-item");

      off_canvas_items.forEach((item: any) => {
        item.classList.add("hidden");
      });

      off_canvas_icos?.classList.remove('hidden');
      off_canvas_socials?.classList.remove('hidden');
    } else {
      // ? state : Cerrado --> Abro el off canvas

      if ( off_canvas) {
         off_canvas.style.minWidth = "17vw";  
      }
      if(contenido_web){
        contenido_web.style.width = "83vw";
      }

      btn_close?.classList.add('block');
      btn_close?.classList.remove('hidden');
      btn_open?.classList.remove('block');
      btn_open?.classList.add('hidden');
      off_canvas_body?.classList.remove("off-canvas-hidde-item");

      off_canvas_items.forEach((item: any) => {
        item.classList.remove("hidden");
      });

      off_canvas_icos?.classList.add('hidden');
      off_canvas_socials?.classList.add('hidden');
    }
  }
}
