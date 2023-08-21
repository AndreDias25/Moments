import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string = '';


  constructor() { }

  add(message: string){
    this.message = message

    setTimeout(() => {
        this.clear()
    }, 4000)
  }

  clear(){
    this.message = '';
  }
}
