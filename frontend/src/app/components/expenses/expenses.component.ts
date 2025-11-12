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
  selectedExpense!: IExpense;

  constructor(private expenseService: ExpenseService) {}

  showForm = false;
  editForm = false;

  ngOnInit(): void {
    this.expenseService
      .fetchAll()
      .subscribe((allExpenses) => (this.expenseCollection = allExpenses));
  }

  onAddExpense(newExpense: IExpense) {
    this.expenseService.create(newExpense).subscribe((createdExpense) => {
      this.expenseCollection = [createdExpense, ...this.expenseCollection];
      this.closeForm();
    });
  }

  onDeleteExpense(expenseId: string) {
    this.expenseService.delete(expenseId).subscribe(() => {
      const position = this.expenseCollection.findIndex(
        (exp) => exp.id === expenseId
      );
      this.expenseCollection.splice(position, 1);
    });
  }

  onEditExpense(expense: IExpense) {
    this.editForm = true;
    this.selectedExpense = expense;
  }

  onEditFormSubmit(expense: IExpense) {
    this.expenseService.update(expense).subscribe((updatedExpense) => {
      const position = this.expenseCollection.findIndex(
        (exp) => exp.id === expense.id
      );
      this.expenseCollection[position] = updatedExpense;
      this.editForm = false;
    });
  }

  closeForm() {
    this.showForm = false;
  }
}
