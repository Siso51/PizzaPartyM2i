import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = {login : null, email : null, password: null, password_bis: null};
  connecte:boolean = false;
  deconnecte:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  checkForm(){
    console.log(this.registerForm);
  }

  isValid():boolean {
    if(!!this.registerForm.login && !!this.registerForm.email && !!this.registerForm.password && !!this.registerForm.password_bis){
      this.connecte = true;
      this.deconnecte = false;
      return true
    } else {
      this.connecte = false;
      this.deconnecte = true;
      return false;
    }
    
    //return !!this.registerForm.login && !!this.registerForm.email && !!this.registerForm.password && !!this.registerForm.password_bis;
  }

}
