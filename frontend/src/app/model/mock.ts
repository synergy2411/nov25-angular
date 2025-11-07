import { IUser } from './user-model';

export const USER_DATA: IUser[] = [
  {
    firstName: 'bill',
    lastName: 'gates',
    company: 'Microsoft Inc',
    dob: new Date('Dec 12, 1965'),
    income: 50000,
    isWorking: true,
    avatar: './assets/images/bill.jpeg',
    votes: 120,
  },
  {
    firstName: 'steve',
    lastName: 'jobs',
    company: 'Apple Inc',
    dob: new Date('Jan 2, 1965'),
    income: 0,
    isWorking: false,
    avatar: './assets/images/steve.jpeg',
    votes: 190,
  },
  {
    firstName: 'tim b.',
    lastName: 'lee',
    company: 'World wide web',
    dob: new Date('Aug 21, 1965'),
    income: 30000,
    isWorking: true,
    avatar: './assets/images/tim.jpg',
    votes: 80,
  },
];
