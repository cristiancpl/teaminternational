import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Employee } from '../../models/employees.model';
import { AppState } from '../../app.state';
import { Router } from '@angular/router';





export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
];

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Observable<Employee[]>;

  displayedColumns: string[] = ['name', 'age', 'username', 'hireDate', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild('filterValue') filterValueRef: ElementRef;


  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<AppState>, private router: Router) {
    this.employees = store.select('employee');
    this.employees.subscribe(employees =>
      this.dataSource = new MatTableDataSource(employees)
    );
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    this.dataSource.filter = this.filterValueRef.nativeElement.value.trim().toLowerCase();
  }

  cleanFilter() {
    this.filterValueRef.nativeElement.value = '';
    this.dataSource.filter = '';
  }

  view(id: number) {
    this.router.navigateByUrl('/some-user/view/' + id);
  }

  edit(id: number) {
    this.router.navigateByUrl('/some-user/edit/' + id);
  }

  add() {
    this.router.navigateByUrl('/some-user/new/');
  }


}
