import { Component,HostListener, ElementRef,  OnInit } from '@angular/core';
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

  dataUser: any  = {
    es:{
      title: "Mi Portafolio",
      firstName: "Jhossymar",
      lastName: "Balderrama Rocha",
      description: "Desarrollador Full Stack",
      descriptionStack: "Angular - Spring Boot",
    },
    en:{
      title: "My Portfolio",
      firstName: "Jhossymar",
      lastName: "Balderrama Rocha",
      description: "Full Stack Developer",
      descriptionStack: "Angular - Spring Boot",
    }
  }

  
  data : any = {};

  constructor(public auth : AuthService, private elementRef: ElementRef){              
  }
  
  
  ngOnInit(): void {
 
  }


  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataUser.es;
    }else if(this.auth.languajeSelect == 'en'){
      this.data = this.dataUser.en;
    }else{
      this.data = this.dataUser.br;
    }
    return true;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {    
    // const boxProfile: any = (<HTMLElement> document.getElementById('box-profile'));

    // // Si el scroll se va hacia abajo lo oculto
    // if(window.scrollY > 450){
    //   boxProfile.classList.remove('profileShow');
    //   boxProfile.classList.remove('block');
    //   boxProfile.classList.add('profileHide');
    //   setTimeout(() => {
    //     boxProfile.classList.add('hide');      
    //   }, 3100);
    //   // boxProfile.style.transform = "translate("+0+"%  , -"+200+"%)"
    // }

    // // Si sube arriba - Vuelve el profile
    // if(window.scrollY <= 450){      
    //   boxProfile.classList.remove('profileHide');  
    //   boxProfile.classList.remove('hide');
    //   boxProfile.classList.add('profileShow');
    //   boxProfile.classList.add('block');
           
    // }

    
  }
  
}
