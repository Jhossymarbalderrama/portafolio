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
      form:{
        name: "Nombre",
        placeName: "ingrese un nombre",
        mail: "Mail",
        placeMail: "ingrese un mail",
        subject: "Asunto",
        placeSubject: "ingrese un asunto",
        placeMessage: "mensaje"
      },
      button: "Enviar"
    },
    en:{
      title:"Contact me",
      form:{
        name: "Name",
        placeName: "enter a name",
        mail: "Mail",
        placeMail: "enter a mail",
        subject: "Subject",
        placeSubject: "enter a subject",
        placeMessage: "message"
      },
      button: "Send"
    }
  }


  constructor(public auth: AuthService) {

  }
}
