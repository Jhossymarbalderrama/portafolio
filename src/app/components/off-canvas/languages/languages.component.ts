import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  public langSelect: string = '';
  public data_language: any;
  public flag_lang: string = '';

  constructor(
    private auth: AuthService
  ){
    this.auth.data$.subscribe(data => {
      if (data) {   
        this.data_language = auth.getFlagLanguage;
      }
    })
  }

  public changeLang(){
    this.auth.changeLanguage();
    this.data_language = this.auth.getFlagLanguage;
  }
}
