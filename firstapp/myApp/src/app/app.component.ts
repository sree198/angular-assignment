import { Component ,OnInit} from '@angular/core';
import { CalculateService } from './calculate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sree';
  msg="data binding";
  isDisabled=false;
  message="sample message";
  amount=500;
  courseList : Array<string>=['HTML', 'CSS', 'XML'];
  studentList : Array<any>= new Array<any>();
  showInfo: boolean=false;
  caption: string= 'Show Text';
  sum:number =0;
  constructor(private calculate : CalculateService){
    this.sum= this.calculate.add(1,2,3,4,5);
  }
  ngOnInit(){
  this.studentList = [
    { SrlNo: 1, Name: 'Smith', Course: 'HTML', Grade: 'A' },
    { SrlNo: 2, Name: 'John', Course: 'CSS', Grade: 'C' },
    { SrlNo: 3, Name: 'William', Course: 'JavaScript', Grade: 'B' },
    { SrlNo: 4, Name: 'Mike', Course: 'Ajax', Grade: 'D' },
    { SrlNo: 5, Name: 'Peter', Course: 'TypeScript', Grade: 'B' },
    { SrlNo: 6, Name: 'James', Course: 'Angular', Grade: 'A' }
];
  }
  showMessage() : void {
    alert(this.message);
  }
  changeData() : void{
    this.showInfo=!this.showInfo;
    if(this.showInfo){
      this.caption="Hide Text";
    }
    else 
    this.caption="Show Text";
  }
}
