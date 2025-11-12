import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IExpense } from '../../../model/expense-model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent implements OnInit {
  @Input() expense!: IExpense;

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

  ngOnInit(): void {
    if (this.expense) {
      this.expenseForm.patchValue({
        title: this.expense.title,
        amount: this.expense.amount,
        createdAt: this.expense.createdAt,
      });
    }
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
