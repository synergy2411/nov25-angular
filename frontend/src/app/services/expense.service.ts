import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpense } from '../model/expense-model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseURL = 'http://localhost:3000/expenses';

  constructor(private http: HttpClient) {}

  fetchAll() {
    return this.http.get<IExpense[]>(this.baseURL);
  }

  create(expense: IExpense) {
    return this.http.post<IExpense>(this.baseURL, expense, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  update() {}

  delete(expenseId: string) {
    return this.http.delete(`${this.baseURL}/${expenseId}`);
  }
}
