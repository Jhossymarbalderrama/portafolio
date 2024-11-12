import { Component, HostListener } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProjectComponent } from "./project/project.component";
import { SkillComponent } from "./skill/skill.component";
import { ContactComponent } from "./contact/contact.component";
import { CertificateComponent } from "./certificate/certificate.component";
import { ExperienceComponent } from "./experience/experience.component";
import { AuthService } from '../../services/auth.service';
import { LanguagesComponent } from "../off-canvas/languages/languages.component";
import { ContentCanvasComponent } from "../off-canvas/content-canvas/content-canvas.component";


@Component({
  selector: 'app-content-web',
  standalone: true,
  imports: [HomeComponent, AboutComponent, ProjectComponent, SkillComponent, ContactComponent, CertificateComponent, ExperienceComponent, LanguagesComponent, ContentCanvasComponent],
  templateUrl: './content-web.component.html',
  styleUrl: './content-web.component.css'
})
export class ContentWebComponent {
  public title_menu: string = "";
  
  constructor(
    private auth: AuthService
  ){
    this.auth.data$.subscribe(data => {
      if (data) {
        this.title_menu = auth.getTitleMenu;        
      }
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void{
    let scrollY = window.scrollY;

    let position_home = document.getElementById('href_home');
    let position_about = document.getElementById('about');
    let position_project = document.getElementById('project');
    let position_experience = document.getElementById('experience');
    let position_skill = document.getElementById('skill');
    let position_certificate = document.getElementById('certificate');
    let position_contact = document.getElementById('contact');


    let icons = document.querySelectorAll(".item-menu-canvas");

    icons.forEach( (item:any) =>{
      item.classList.remove("active");
    })

    // ? Home
    if(scrollY < position_about!.offsetTop){
      document.getElementById('icon-home')?.classList.add("active") 
    }      

    if(scrollY > position_about!.offsetTop-200 && scrollY < position_project!.offsetTop-200){
      document.getElementById('icon-about')?.classList.add("active")
    }

    if(scrollY > position_project!.offsetTop-200 && scrollY < position_experience!.offsetTop-200){
      document.getElementById('icon-project')?.classList.add("active")
    }

    if(scrollY > position_experience!.offsetTop-200 && scrollY < position_skill!.offsetTop-200){
      document.getElementById('icon-experience')?.classList.add("active")
    }

    if(scrollY > position_skill!.offsetTop-200 && scrollY < position_certificate!.offsetTop-200){
      document.getElementById('icon-skill')?.classList.add("active")
    }

    if(scrollY > position_certificate!.offsetTop-200 && scrollY < position_contact!.offsetTop-200){
      document.getElementById('icon-certificate')?.classList.add("active")
    }

    if(scrollY > position_contact!.offsetTop-150){
      document.getElementById('icon-contact')?.classList.add("active")
    }


    if(position_home!.offsetTop < scrollY){
      document.getElementById("icon-arrow-up")?.classList.remove("hidden");
      document.getElementById("icon-arrow-up")?.classList.add("block");
      document.getElementById("icon-wsp")?.classList.add("icon-wsp-translate");
    }

    if(position_about!.offsetTop-180 > scrollY){
      document.getElementById("icon-arrow-up")?.classList.remove("block");
      document.getElementById("icon-arrow-up")?.classList.add("hidden");
      document.getElementById("icon-wsp")?.classList.remove("icon-wsp-translate");
    }

  
  }

  public changeTheMode(icon: string) {
    // ! Theme Light and Dark Mode
    // let iconDark = document.getElementById('theme-dark');
    // let iconLight = document.getElementById('theme-light');
    // let body = document.body;
    // let className = 'theme-mode-active';
    
    // icon == 'sun' ? (
    //   this.auth.setThemeActivate = true,
    //   iconDark?.classList.remove(className),
    //   iconLight?.classList.add(className),
    //   body.classList.remove('dark-theme'))
    // :(
    //   iconDark?.classList.add(className),
    //   iconLight?.classList.remove(className),
    //   this.auth.setThemeActivate = false,
    //   body.classList.add('dark-theme')
    //  );    
  }
}
