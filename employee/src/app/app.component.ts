import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'rohit';
  searchText='';
  empdata: Array<any>=new Array<any>();
  empdata2: Array<any>=new Array<any>();
  empdatatemp: Array<any>=new Array<any>();
  message="";

  showInfo: boolean=false;
  constructor()
  {
      this.empdata2=[];
      this.message="";
      this.empdata=[
          {name: 'Ram',designation: 'software engineer',salary: 15000},
          {name: 'Sam',designation: 'Testing engineer',salary: 25000},
          {name: 'Ravi',designation: 'Dev ops',salary: 35000},
          {name: 'Sophi',designation: 'Testing engineer',salary: 23000}
          ]
  }
  hello(x: any)
  {
    this.empdata=this.empdata.filter((_,idx)=>idx!==x);
  }
  
}

