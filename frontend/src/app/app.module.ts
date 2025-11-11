import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleComponent } from './components/playground/life-cycle/life-cycle.component';
import { DirectivesDemoComponent } from './components/playground/directives-demo/directives-demo.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { PipeDemoComponent } from './components/playground/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UserService } from './services/user.service';
import { CounterAComponent } from './components/playground/counter-a/counter-a.component';
import { CounterBComponent } from './components/playground/counter-b/counter-b.component';
import { ObservableDemoComponent } from './components/playground/observable-demo/observable-demo.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseItemComponent } from './components/expenses/expense-item/expense-item.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';

@NgModule({
  declarations: [
    // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserImgComponent,
    UserInfoComponent,
    LifeCycleComponent,
    DirectivesDemoComponent,
    BetterHighlightDirective,
    PipeDemoComponent,
    CountryCodePipe,
    ReversePipe,
    FilterPipe,
    SortPipe,
    LoginComponent,
    RegisterComponent,
    CounterAComponent,
    CounterBComponent,
    ObservableDemoComponent,
    ExpensesComponent,
    ExpenseItemComponent,
    ExpenseFormComponent,
  ],
  imports: [
    // Imports module functionality
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService], // Creates tokens and register the Services
  bootstrap: [AppComponent],
})
export class AppModule {}
