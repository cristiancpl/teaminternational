import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Employee } from './../models/employees.model';

export const ADD_EMPLOYEE = '[EMPLOYEE] Add';
export const REMOVE_EMPLOYEE = '[EMPLOYEE] Remove';
export const EDIT_EMPLOYEE = '[EMPLOYEE] Edit';
export const VIEW_EMPLOYEE = '[EMPLOYEE] View';

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;
  constructor(public payload: Employee) { }
}

export class RemoveEmployee implements Action {
  readonly type = REMOVE_EMPLOYEE;
  constructor(public payload: Employee) { }
}

export class EditEmployee implements Action {
  readonly type = EDIT_EMPLOYEE;
  constructor(public payload: Employee) { }
}

export class ViewEmployee implements Action {
  readonly type = VIEW_EMPLOYEE;
  constructor(public payload: number) { }
}

export type Actions = AddEmployee | RemoveEmployee | EditEmployee | ViewEmployee;
