import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  timeMessage : string;

  constructor() { 
    setInterval(()=>{
      this.timeMessage = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
