import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  name: string = "Vinicius";
  message: string = "";

  onSubmit(){
    if(this.message==""){
      
    this.message = "funfou"

    } else this.message = ""
  }

}
