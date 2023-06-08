import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviarDatoService {

  constructor() { }

  setDato(object:any){
    localStorage.setItem('dato',JSON.stringify(object))
  }

  getDato(){
    return localStorage.getItem('dato');
  }
}
