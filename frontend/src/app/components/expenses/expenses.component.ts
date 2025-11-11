import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { IExpense } from '../../model/expense-model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  expenseCollection!: IExpense[];

  constructor(private expenseService: ExpenseService) {}

  showForm = false;

  ngOnInit(): void {
    this.expenseService
      .fetchAll()
      .subscribe((allExpenses) => (this.expenseCollection = allExpenses));
  }

  closeForm() {
    this.showForm = false;
  }
}
