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
    },
    br:{
      title: "Certificados",
    }
  }

  data: any = {};
  constructor(public auth: AuthService) {

  }

  changeLanguaje() : boolean{
    if(this.auth.languajeSelect == 'es'){
      this.data = this.dataCertificates.es;
    }else if(this.auth.languajeSelect == 'en'){
      this.data = this.dataCertificates.en;
    }else{
      this.data = this.dataCertificates.br;
    }
    return true;
  }
}
