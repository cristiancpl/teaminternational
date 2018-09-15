import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-some-user',
  templateUrl: './some-user.component.html',
  styleUrls: ['./some-user.component.css']
})
export class SomeUserComponent implements OnInit {


  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
