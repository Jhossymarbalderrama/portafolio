import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  dataContact: any = {
    es:{
      title:"Contáctame",
      tag: "Contacto",
      description: "Contáctame para cualquier consulta o duda.",
      titleForm: "Formulario",
      form:{
        name: "Nombre",
        placeName: "ingrese un nombre",
        mail: "Mail",
        placeMail: "ingrese un mail",
        subject: "Asunto",
        placeSubject: "ingrese un asunto",
        message: "Mensaje",
        placeMessage: "mensaje",
      },
      button: "Enviar"
    },
    en:{
      title:"Contact me",
      tag: "Contact",
      description: "Contact me for any consultation or doubt.",
      titleForm: "Form",
      form:{
        name: "Name",
        placeName: "enter a name",
        mail: "Mail",
        placeMail: "enter a mail",
        subject: "Subject",
        placeSubject: "enter a subject",
        message: "Mensaje",
        placeMessage: "message"
      },
      button: "Send"
    },
    br:{
      title:"Contact me",
      tag: "Contact",
      description: "Contact me for any consultation or doubt.",
      titleForm: "Form",
      form:{
        name: "Name",
        placeName: "enter a name",
        mail: "Mail",
        placeMail: "enter a mail",
        subject: "Subject",
        placeSubject: "enter a subject",
        message: "Mensaje",
        placeMessage: "message"
      },
      button: "Send"
    }
  }

  data: any = {};

  constructor(public auth: AuthService) {

  }

  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataContact.es;
    }else if(this.auth.languajeSelect == 'en'){
      this.data = this.dataContact.en;
    }else{
      this.data = this.dataContact.br;
    }
    return true;
  }
}
