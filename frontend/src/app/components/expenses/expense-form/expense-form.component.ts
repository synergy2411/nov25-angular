import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IExpense } from '../../../model/expense-model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  @Output() closeEvent = new EventEmitter();
  @Output() formSubmitEvent = new EventEmitter<IExpense>();

  expenseForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      title: new FormControl(),
      amount: new FormControl(),
      createdAt: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.expenseForm.value);
    let expense: IExpense = { ...this.expenseForm.value };
    this.formSubmitEvent.emit(expense);
  }

  onClose() {
    this.closeEvent.emit();
  }
}
