import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {

  dataCertificates: any = {
    es:{
      title: "Certificados",
    },
    en:{
      title: "Certificates",
    }
  }

  constructor(public auth: AuthService) {

  }
}
