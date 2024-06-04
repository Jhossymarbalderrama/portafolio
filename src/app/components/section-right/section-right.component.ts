import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-section-right',
  templateUrl: './section-right.component.html',
  styleUrls: ['./section-right.component.css']
})
export class SectionRightComponent implements OnInit{

  dataSection: any = {
    es:{
      title:"Portafolio"
    },
    en:{
      title:"Portfolio"
    }
  }

  data : any = {};
  constructor(private elementRef: ElementRef, public auth : AuthService) {
  }

  ngOnInit(){

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {

    // Elementos para obtener la posicion en el Scroll
    const yHome = this.elementRef.nativeElement.querySelector('#homeHref');
    const yAbout = this.elementRef.nativeElement.querySelector('#about');
    const yProject = this.elementRef.nativeElement.querySelector('#project');
    const yEducation = this.elementRef.nativeElement.querySelector('#education');
    const yExperience = this.elementRef.nativeElement.querySelector('#experience');    
    const ySkills = this.elementRef.nativeElement.querySelector('#skills');
    const yCertificate = this.elementRef.nativeElement.querySelector('#certificate');
    const yContact = this.elementRef.nativeElement.querySelector('#contact');


    // Elementos Menu al que poner Clase Focus
    const mHome = <HTMLElement>document.querySelector('#mHome');
    const mAbout = <HTMLElement>document.querySelector('#mAbout');
    const mProject = <HTMLElement> document.querySelector('#mProject');
    const mEducation = <HTMLElement>document.querySelector('#mEducation');
    const mExperience = <HTMLElement>document.querySelector('#mExperience');
    const mSkills = <HTMLElement>document.querySelector('#mSkills');
    const mCertificate = <HTMLElement>document.querySelector('#mCertificate');
    const mContact = <HTMLElement>document.querySelector('#mContact');

    const yOffset = window.scrollY;
    const nameClass: string = "focus-section";
    
    const btnToTop = (<HTMLElement>document.querySelector('#icon-up'));
    const btnWsp = (<HTMLElement>document.querySelector('#icon-wsp'));
    // Home
    if (yOffset <= yHome?.offsetTop) {
      this.removeClassFocusInMenu();
      mHome?.classList.add(nameClass);              
    }

    // About
    if(yOffset > yHome?.offsetTop && yOffset <= yAbout?.offsetTop){
      this.removeClassFocusInMenu();
      mAbout?.classList.add(nameClass);       
    }

    // Proyect
    if(yOffset > yAbout?.offsetTop){
        this.removeClassFocusInMenu();
        mProject?.classList.add(nameClass);
    }
  
    // Experience    
    if(yOffset > yProject?.offsetTop+50){            
        this.removeClassFocusInMenu();
        mExperience?.classList.add(nameClass);  
    }
    
    // Skills
    if(yOffset > yExperience?.offsetTop+50){      
      this.removeClassFocusInMenu();
      mSkills?.classList.add(nameClass);  
    }
    
    // Certificates
    if(yOffset > ySkills?.offsetTop+50){      
      this.removeClassFocusInMenu();
      mCertificate?.classList.add(nameClass); 
    }
    
    // Contacts
    if(yOffset > yCertificate?.offsetTop+50){      
      this.removeClassFocusInMenu();
      mContact?.classList.add(nameClass); 
    }

    
    if (yOffset <= 100){
      btnToTop?.classList.add('icon-up');
      btnWsp?.classList.remove('icon-wsp-move');
    }else{
      btnToTop?.classList.remove('icon-up');
      btnWsp?.classList.add('icon-wsp-move');
    }    
  }

  removeClassFocusInMenu():void{
    const mHome = <HTMLElement>document.querySelector('#mHome');
    const mAbout = <HTMLElement>document.querySelector('#mAbout');
    const mEducation = <HTMLElement>document.querySelector('#mEducation');
    const mExperience = <HTMLElement>document.querySelector('#mExperience');
    const mProject = <HTMLElement> document.querySelector('#mProject');
    const mSkills = <HTMLElement>document.querySelector('#mSkills');
    const mCertificate = <HTMLElement>document.querySelector('#mCertificate');
    const mContact = <HTMLElement>document.querySelector('#mContact');
    const nameClass: string = "focus-section";

    mHome?.classList.remove(nameClass);
    mAbout?.classList.remove(nameClass);
    mEducation?.classList.remove(nameClass);
    mExperience?.classList.remove(nameClass);
    mProject?.classList.remove(nameClass);
    mSkills?.classList.remove(nameClass);
    mCertificate?.classList.remove(nameClass);
    mContact?.classList.remove(nameClass);        
  }  


  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataSection.es;
    }else{
      this.data = this.dataSection.en;
    }
    return true;
  }

  viewNav(){
    const btn = document.getElementById('navbarsExample01');
    if(btn?.classList.contains('collapse')){
      btn?.classList.remove('collapse');
      btn?.classList.remove('show');
    }else{
      btn?.classList.add('collapse');
    }
  }

}
