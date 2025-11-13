import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
import { AuthInterceptor } from './services/interceptors/auth.interceptor';
import { ResponseInterceptor } from './services/interceptors/response.interceptor';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { APP_ROUTES } from './app.routes';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { CoursesComponent } from './components/courses/courses.component';

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
    PageNotFoundComponent,
    MainNavigationComponent,
    CoursesComponent,
  ],
  imports: [
    // Imports module functionality
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    UserService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
  ], // Creates tokens and register the Services
  bootstrap: [AppComponent],
})
export class AppModule {}
