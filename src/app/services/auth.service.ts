import { Injectable } from '@angular/core';
import data_es from '../../assets/data-es.json';
import data_en from '../../assets/data-en.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private theme_web: boolean = false; // ? False: Dark  | True : Light

  private languages: string[] = ["ES-es", "EN-en"];
  private langSelect: string = '';
  private dataSubject = new BehaviorSubject<any>(null);

  public data$ = this.dataSubject.asObservable();


  public get getThemeActivate():boolean{
    return this.theme_web;
  }

  public set setThemeActivate(value: boolean){
    this.theme_web = value;
  }

  public get getLogo(): any {
    return this.dataSubject.value?.logo;
  }

  public get getDataHome(): any {
    const data = this.dataSubject.value;
    let data_badges = data?.data_badges;

    return {...data?.data_home, data_badges};
  }

  public get getTitleMenu():any{
    return this.dataSubject.value?.title_menu;
  }

  public get getDataAbout(): any {
    const data = this.dataSubject.value;
    let first_name = data?.first_name;
    let last_name = data?.last_name;
    let doc_cv = data?.cv_url;
    
    return { ...data?.data_about, first_name, last_name, doc_cv};
  }

  public get getDataProject(): any {
    return this.dataSubject.value?.data_project;
  }

  public get getDataExperience(): any {
    return this.dataSubject.value?.data_experience;
  }

  public get getDataSkill(): any {
    return this.dataSubject.value?.data_skill;
  }

  public get getDataCertificate(): any {
    return this.dataSubject.value?.data_certificate;
  }

  public get getDataContact(): any {
    const data = this.dataSubject.value;    
    let first_name = data?.first_name;
    let last_name =  data?.last_name;
    return { ...data?.data_contact, ...data?.contact, first_name, last_name};
  }

  public get getDataToastContact():any{
    const data = this.dataSubject.value; 
    const toast_success = data?.data_contact.toast_success;
    const toast_info = data?.data_contact.toast_info;
    const toast_danger = data?.data_contact.toast_danger;
    return {toast_success, toast_info, toast_danger}
  }

  public get getDataMenu(): any {
    return this.dataSubject.value?.menu;
  }

  // ! Language
  public get getLangSelect(): string {
    return this.langSelect;
  }

  public set setLangSelect(lang: string) {
    localStorage.setItem("lang", lang);
    this.langSelect = lang;
  }

  public get getFlagLanguage(): any {
    const data = this.dataSubject.value;
    if (this.langSelect === 'ES-es') {
      return data?.languages_flags[1];
    } else {
      return data?.languages_flags[0];
    }
  }

  public changeLanguage() {
    if (this.langSelect == 'ES-es') {
      this.setLangSelect = 'EN-en';
    } else {
      this.setLangSelect = 'ES-es';
    }

    this.changeData();
  }

  private changeData() {
    if (this.langSelect === 'ES-es') {
      this.dataSubject.next(data_es);
    } else {
      this.dataSubject.next(data_en);
    }
  }

  constructor() {
    let langLocal = localStorage.getItem("lang");

    if (langLocal) {
      this.setLangSelect = langLocal;
    } else {
      this.changeLanguage();
    }

    this.changeData();
  }
}
