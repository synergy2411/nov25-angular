import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpense } from '../model/expense-model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseURL = 'http://localhost:3000/expenses/';

  constructor(private http: HttpClient) {}

  fetchAll() {
    return this.http.get<IExpense[]>(this.baseURL);
  }

  create() {}

  update() {}

  delete() {}
}
