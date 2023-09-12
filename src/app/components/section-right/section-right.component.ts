import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-section-right',
  templateUrl: './section-right.component.html',
  styleUrls: ['./section-right.component.css']
})
export class SectionRightComponent implements OnInit{

  dataSection: any = {
    es:{
      title:"Mí Portafolio"
    },
    en:{
      title:"My Portfolio"
    }
  }

  constructor(private elementRef: ElementRef, public auth : AuthService) {
    this.auth.languajeSelect = "en";
  }

  ngOnInit(){
    (<HTMLElement> document.getElementById("enPhone")).classList.add("select-languaje");
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const home = this.elementRef.nativeElement.querySelector('#homeHref');
    const about = this.elementRef.nativeElement.querySelector('#about');
    const education = this.elementRef.nativeElement.querySelector('#education');
    const experience = this.elementRef.nativeElement.querySelector('#experience');
    // const project = this.elementRef.nativeElement.querySelector('#project');
    const skills = this.elementRef.nativeElement.querySelector('#skills');
    const certificate = this.elementRef.nativeElement.querySelector('#certificate');
    const contact = this.elementRef.nativeElement.querySelector('#contact');

    const mHome = <HTMLElement>document.querySelector('#mHome');
    const mAbout = <HTMLElement>document.querySelector('#mAbout');
    const mEducation = <HTMLElement>document.querySelector('#mEducation');
    const mExperience = <HTMLElement>document.querySelector('#mExperience');
    // const mProject = <HTMLElement> document.querySelector('#mProject');
    const mSkills = <HTMLElement>document.querySelector('#mSkills');
    const mCertificate = <HTMLElement>document.querySelector('#mCertificate');
    const mContact = <HTMLElement>document.querySelector('#mContact');

    const yOffset = window.pageYOffset;

    if (yOffset >= 0 && yOffset < home.offsetTop) {
      mHome.classList.add('focus-section');
      mAbout.classList.remove('focus-section');
      mEducation.classList.remove('focus-section');
      mExperience.classList.remove('focus-section');
      mSkills.classList.remove('focus-section');
      mCertificate.classList.remove('focus-section');
      mContact.classList.remove('focus-section');      
    } else if (yOffset >= home.offsetTop && yOffset < education.offsetTop-500) {
      mHome.classList.remove('focus-section');
      mAbout.classList.add('focus-section');
      mEducation.classList.remove('focus-section');
      mExperience.classList.remove('focus-section');
      mSkills.classList.remove('focus-section');
      mCertificate.classList.remove('focus-section');
      mContact.classList.remove('focus-section');      
    } else if (yOffset >= about.offsetTop && yOffset < 2915-500) {
      mHome.classList.remove('focus-section');
      mAbout.classList.remove('focus-section');
      mEducation.classList.add('focus-section');
      mExperience.classList.remove('focus-section');
      mSkills.classList.remove('focus-section');
      mCertificate.classList.remove('focus-section');
      mContact.classList.remove('focus-section');
    } else if (yOffset >= education.offsetTop && yOffset < skills.offsetTop-20) {
      mHome.classList.remove('focus-section');
      mAbout.classList.remove('focus-section');
      mEducation.classList.remove('focus-section');
      mExperience.classList.add('focus-section');
      mSkills.classList.remove('focus-section');
      mCertificate.classList.remove('focus-section');
      mContact.classList.remove('focus-section');
    } else if (yOffset >= experience.offsetTop && yOffset < certificate.offsetTop-500) {
      mHome.classList.remove('focus-section');
      mAbout.classList.remove('focus-section');
      mEducation.classList.remove('focus-section');
      mExperience.classList.remove('focus-section');
      mSkills.classList.add('focus-section');
      mCertificate.classList.remove('focus-section');
      mContact.classList.remove('focus-section');
    } else if (yOffset >= skills.offsetTop && yOffset < contact.offsetTop-500) {
      mHome.classList.remove('focus-section');
      mAbout.classList.remove('focus-section');
      mEducation.classList.remove('focus-section');
      mExperience.classList.remove('focus-section');
      mSkills.classList.remove('focus-section');
      mCertificate.classList.add('focus-section');
      mContact.classList.remove('focus-section');     
    }else if(yOffset >= certificate.offsetTop && yOffset < 99999){
      mHome.classList.remove('focus-section');
      mAbout.classList.remove('focus-section');
      mEducation.classList.remove('focus-section');
      mExperience.classList.remove('focus-section');
      mSkills.classList.remove('focus-section');
      mCertificate.classList.remove('focus-section');
      mContact.classList.add('focus-section');   
    }else{
      mHome.classList.remove('focus-section');
      mAbout.classList.remove('focus-section');
      mEducation.classList.remove('focus-section');
      mExperience.classList.remove('focus-section');
      mSkills.classList.remove('focus-section');
      mCertificate.classList.remove('focus-section');
      mContact.classList.remove('focus-section'); 
    }


    if (yOffset <= 100){
      (<HTMLElement>document.querySelector('#icon-up')).classList.add('icon-up')
    }else{
      (<HTMLElement>document.querySelector('#icon-up')).classList.remove('icon-up')
    }
  }

  selectlanguaje(langSelect:string):void{
    this.auth.languajeSelect = langSelect;
    (<HTMLElement> document.getElementById(langSelect+'Phone')).classList.add("select-languaje");    

    this.auth.languajes.forEach((lang: any) => {
      if(lang != langSelect){
        (<HTMLElement> document.getElementById(lang+'Phone')).classList.remove("select-languaje");
      }
    });
  }
}
