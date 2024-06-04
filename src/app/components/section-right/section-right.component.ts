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
    let yHome = this.elementRef.nativeElement.querySelector('#homeHref');
    let yAbout = this.elementRef.nativeElement.querySelector('#about');
    let yProject = this.elementRef.nativeElement.querySelector('#project');
    let yEducation = this.elementRef.nativeElement.querySelector('#education');
    let yExperience = this.elementRef.nativeElement.querySelector('#experience');    
    let ySkills = this.elementRef.nativeElement.querySelector('#skills');
    let yCertificate = this.elementRef.nativeElement.querySelector('#certificate');
    let yContact = this.elementRef.nativeElement.querySelector('#contact');


    // Elementos Menu al que poner Clase Focus
    let mHome = <HTMLElement>document.querySelector('#mHome');
    let mAbout = <HTMLElement>document.querySelector('#mAbout');
    let mProject = <HTMLElement> document.querySelector('#mProject');
    let mEducation = <HTMLElement>document.querySelector('#mEducation');
    let mExperience = <HTMLElement>document.querySelector('#mExperience');
    let mSkills = <HTMLElement>document.querySelector('#mSkills');
    let mCertificate = <HTMLElement>document.querySelector('#mCertificate');
    let mContact = <HTMLElement>document.querySelector('#mContact');

    let yOffset = window.scrollY;
    let nameClass: string = "focus-section";
    
    let btnToTop = (<HTMLElement>document.querySelector('#icon-up'));
    let btnWsp = (<HTMLElement>document.querySelector('#icon-wsp'));
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
    if(yOffset > yAbout?.offsetTop+100){
        this.removeClassFocusInMenu();
        mProject?.classList.add(nameClass);
    }
  
    // Experience    
    if(yOffset > yProject?.offsetTop+200){            
        this.removeClassFocusInMenu();
        mExperience?.classList.add(nameClass);  
    }
    
    // Skills
    if(yOffset > yExperience?.offsetTop+200){      
      this.removeClassFocusInMenu();
      mSkills?.classList.add(nameClass);  
    }
    
    // Certificates
    if(yOffset > ySkills?.offsetTop+1200){      
      this.removeClassFocusInMenu();
      mCertificate?.classList.add(nameClass); 
    }
    
    // Contacts
    if(yOffset > yCertificate?.offsetTop+200){      
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
    let mHome = <HTMLElement>document.querySelector('#mHome');
    let mAbout = <HTMLElement>document.querySelector('#mAbout');
    let mEducation = <HTMLElement>document.querySelector('#mEducation');
    let mExperience = <HTMLElement>document.querySelector('#mExperience');
    let mProject = <HTMLElement> document.querySelector('#mProject');
    let mSkills = <HTMLElement>document.querySelector('#mSkills');
    let mCertificate = <HTMLElement>document.querySelector('#mCertificate');
    let mContact = <HTMLElement>document.querySelector('#mContact');
    let nameClass: string = "focus-section";

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
    let btn = document.getElementById('navbarsExample01');
    if(btn?.classList.contains('collapse')){
      btn?.classList.remove('collapse');
      btn?.classList.remove('show');
    }else{
      btn?.classList.add('collapse');      
    }
  }

}
