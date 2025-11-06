import { IUser } from './user-model';

export const USER_DATA: IUser = {
  firstName: 'bill',
  lastName: 'gates',
  company: 'Microsoft Inc',
  dob: new Date('Dec 12, 1965'),
  income: 50000,
  isWorking: true,
  avatar: './assets/images/bill.jpeg',
  votes: 120,
};
