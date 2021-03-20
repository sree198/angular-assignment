import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Template Dtiven Form Application';
  person: Person = new Person;

  constructor(){}

 ngOnInit()
 {
   this.person={
     firstname:"",
     lastname:"",
     gender:"male",
     email:""
  };
 }
 onSubmit(personForm : any){
   console.log(personForm.value);

 }
}

export class Person
{
firstname: string | undefined;
lastname : string |  undefined;
gender : string | undefined;
email : string | undefined;
}
