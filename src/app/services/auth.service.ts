import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public languajes: Array<string> = new Array("es","en","br");
  public languajeSelect: string = "";
  constructor() { }
}
