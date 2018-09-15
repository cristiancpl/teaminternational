import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  SomeUser() {
    this.router.navigateByUrl('/some-user');
    console.log(this.router);
  }

  Employees() {
    this.router.navigateByUrl('/employees');
    console.log(this.router);
  }


}
