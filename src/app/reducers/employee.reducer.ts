import { Action } from '@ngrx/store';
import { Employee, ItemBase } from './../models/employees.model';
import * as EmployeeActions from './../actions/employess.actions';
import { Country } from '../models/countries.model';

const initialState: Employee[] = [{
  id: 1,
  name: 'Cristian Pérez',
  status: true,
  dob: new Date(1993, 1, 19),
  country: { alpha3Code: 'COL' } as Country,
  username: 'cperez',
  hireDate: new Date(2016, 8, 3),
  area: { id: 1 } as ItemBase,
  jobTitle: { id: 1 } as ItemBase,
  tipRate: 0,
  age: 25
},
{
  id: 2,
  name: 'Jhon López',
  status: true,
  dob: new Date(1987, 10, 25),
  country: { alpha3Code: 'ABW' } as Country,
  username: 'janierx',
  hireDate: new Date(2012, 2, 5),
  area: { id: 2 } as ItemBase,
  jobTitle: { id: 2 } as ItemBase,
  tipRate: 2.3,
  age: 32
},
{
  id: 3,
  name: 'Felipe Albeiro',
  status: false,
  dob: new Date(1994, 6, 1),
  country: { alpha3Code: 'COL' } as Country,
  username: 'falbeiro',
  hireDate: new Date(2017, 5, 20),
  area: { id: 2 } as ItemBase,
  jobTitle: { id: 2 } as ItemBase,
  tipRate: 0,
  age: 20
},
{
  id: 4,
  name: 'Luz Elena',
  status: true,
  dob: new Date(1944, 4, 3),
  country: { alpha3Code: 'COL' } as Country,
  username: 'luzelena',
  hireDate: new Date(),
  area: { id: 2 } as ItemBase,
  jobTitle: { id: 2 } as ItemBase,
  tipRate: 0,
  age: 43
}
];

export function reducer(state: Employee[] = initialState, action: EmployeeActions.Actions) {

  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      return [...state, action.payload];
    default:
      return state;
  }
}
