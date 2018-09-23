import { Country } from "./countries.model";

export class ItemBase {
  id: number;
  name: string;
  status: boolean;
}

export class Employee extends ItemBase {
  dob: Date;
  country: Country;
  username: string;
  hireDate: Date;
  area: ItemBase;
  jobTitle: ItemBase;
  tipRate: number;
  age: number;
}


export const AREA_DATA: ItemBase[] = [
  { id: 1, name: 'Services', status: true },
  { id: 2, name: 'Kitchen', status: true },
];

export const JOB_TITLE_DATA: ItemBase[] = [
  //Services
  { id: 1, name: 'Manager', status: true },
  { id: 2, name: 'Host', status: true },
  { id: 3, name: 'Tuttofare', status: true },
  { id: 4, name: 'Waitress', status: true },
  { id: 5, name: 'Dining room manager', status: true },

  //Kitchen
  { id: 6, name: 'Chef', status: true },
  { id: 7, name: 'Sous chef', status: true },
  { id: 8, name: 'Dishwasher', status: true },
  { id: 9, name: 'Cook', status: true }
];

