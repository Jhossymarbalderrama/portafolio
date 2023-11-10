import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

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
      contact: {
        email: "jhossymarbalderrama@gmail.com",
        phone: "+54 9 11 6307-9082",
        location: "Avellaneda, Buenos Aires - Argentina"
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
        message: "Message",
        placeMessage: "message"
      },
      contact: {
        email: "jhossymarbalderrama@gmail.com",
        phone: "+54 9 11 6307-9082",
        location: "Avellaneda, Buenos Aires - Argentina"
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
        message: "Message",
        placeMessage: "message"
      },
      contact: {
        email: "jhossymarbalderrama@gmail.com",
        phone: "+54 9 11 6307-9082",
        location: "Avellaneda, Buenos Aires - Argentina"
      },
      button: "Send"
    }
  }

  data: any = {};
  formContact!: FormGroup;

  constructor(public auth: AuthService, private FormBuilder: FormBuilder) {

  }

  ngOnInit(): void {
      try {
        this.formContact = this.FormBuilder.group({
          'name': ['', [Validators.required]],
          'mail': ['', [Validators.required, Validators.email]],
          'subject': ['',[Validators.required]],
          'message': ['',[Validators.required]],
        });
      } catch (e) {
        console.log(e);        
      }
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

  sendContact(): void{
    if(this.formContact){
      this.formContact.reset();
    }
  }
}
