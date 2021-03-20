import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form Application';
  personForm = new FormGroup({
    firstname : new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname : new FormControl('', [Validators.required, Validators.maxLength(13), Validators.pattern("^[a-zA-Z]+$")]),
    email : new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required])
  })
  get firstname(){
    return this.personForm.get('firstname');
  }
  get lastname(){
    return this.personForm.get('lastname');
  }
  get email(){
    return this.personForm.get('email');
  }
  get gender(){
    return this.personForm.get('gender');
  }
  onSubmit(){
    console.log(this.personForm.value);
  }
}

export class Person{
  firstname : string="";
  lastname : string ="";
  email : string= "";
  gender : string="";

}