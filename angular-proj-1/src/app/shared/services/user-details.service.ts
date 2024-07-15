import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  getUserDetails(){
    return{
      name: 'Abdullah',
      dept: "IoT CS"
    }
  }
}
