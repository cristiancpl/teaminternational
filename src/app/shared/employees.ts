export interface ItemBase {
  id: number;
  name: string;
  status: boolean;
}

export interface Employee extends ItemBase {
  dob: Date;
  country: number;
  username: string;
  hireDate: Date;
  area: ItemBase;
  jobTitle: ItemBase;
  tipRate: number;
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

export const EMPLOYESS_DATA: Employee[] = [
  {
    id: 1,
    name: 'Cristian Pérez',
    status: true,
    dob: new Date(),
    country: 1,
    username: 'cperez',
    hireDate: new Date(),
    area: { id: 1, name: 'Services' } as ItemBase,
    jobTitle: { id: 1, name: 'Manager' } as ItemBase,
    tipRate: 0
  },
  {
    id: 1,
    name: 'Jhon López',
    status: true,
    dob: new Date(),
    country: 1,
    username: 'janierx',
    hireDate: new Date(),
    area: { id: 2, name: 'Kitchen' } as ItemBase,
    jobTitle: { id: 2, name: 'Host' } as ItemBase,
    tipRate: 0
  }
];

