import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';
import { CourseFormComponent } from './components/courses/course-form/course-form.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';
import { ExpenseItemComponent } from './components/expenses/expense-item/expense-item.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CounterAComponent } from './components/playground/counter-a/counter-a.component';
import { CounterBComponent } from './components/playground/counter-b/counter-b.component';
import { DirectivesDemoComponent } from './components/playground/directives-demo/directives-demo.component';
import { LifeCycleComponent } from './components/playground/life-cycle/life-cycle.component';
import { ObservableDemoComponent } from './components/playground/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/playground/pipe-demo/pipe-demo.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { EagerModule } from './modules/eager/eager.module';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';
import { ResponseInterceptor } from './services/interceptors/response.interceptor';
import { UserService } from './services/user.service';

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
    CourseDetailComponent,
    CourseFormComponent,
  ],
  imports: [
    // Imports module functionality
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules }),
    EagerModule,
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
