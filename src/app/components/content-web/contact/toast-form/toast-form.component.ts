import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-toast-form',
  standalone: true,
  imports: [],
  templateUrl: './toast-form.component.html',
  styleUrl: './toast-form.component.css'
})
export class ToastFormComponent {
  data:any;

  constructor(private auth:AuthService){
    this.auth.data$.subscribe(data => {
      if (data) {
        this.data = auth.getDataToastContact;        
      }
    })
  }
}
