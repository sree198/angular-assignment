import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  dateMessage: string;
  constructor() { 
    this.dateMessage = new Date().toDateString();
  }

  ngOnInit(): void {
  }

}
