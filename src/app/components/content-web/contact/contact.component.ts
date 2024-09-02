import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import { ToastFormComponent } from "./toast-form/toast-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ToastFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  formContact!: FormGroup;
  data: any;

  get name() {
    return this.formContact.controls['name'];
  }

  get mail() {
    return this.formContact.controls['mail'];
  }

  get subject() {
    return this.formContact.controls['subject'];
  }

  get message() {
    return this.formContact.controls['message'];
  }

  constructor(
    private auth: AuthService,
    private FormBuilder: FormBuilder
  ) {
    this.auth.data$.subscribe(data => {
      if (data) {
        this.data = auth.getDataContact;
      }
    })
  }

  ngOnInit(): void {
    try {
      this.formContact = this.FormBuilder.group({
        'name': ['', [Validators.required]],
        'mail': ['', [Validators.required, Validators.email]],
        'subject': ['', []],
        'message': ['', [Validators.required]],
      })
    } catch (e) {
      console.error(e);
    }
  }

  sendContact(): any {
    if (this.formContact.valid) {
      this.sendMail();
    } else {
      this.formContact.markAllAsTouched();
    }
  }

  private sendMail(): void {    
    let form = document.getElementById('form-contact') as HTMLFormElement;

    let serviceID = 'service_7dgrnop';
    let templateID = 'template_6nco8xc';

    emailjs.init("Ifr5CITEtb1WNeC4B");

    document.getElementById("toast-info")?.classList.remove("hidden");

    setTimeout(() => {
      document.getElementById("toast-info")?.classList.add("hidden");

      emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
          let toastSuccess = document.getElementById("toast-success");

          toastSuccess?.classList.remove("hidden");

          setTimeout(() => {
            toastSuccess?.classList.add("hidden");
          }, 2500);
        })
        .catch((err) => {
          console.error(JSON.stringify(err));
          let toastDanger = document.getElementById("toast-danger");

          toastDanger?.classList.remove("hidden");

          setTimeout(() => {
            toastDanger?.classList.add("hidden");
          }, 2500);
        })
        .finally(
          () => {
            this.formContact.reset();
          }
        );

    }, 1500);
  }



}
