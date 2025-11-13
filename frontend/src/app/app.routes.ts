import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { loginGuard } from './services/guards/login.guard';
import { leaveGuard } from './services/guards/leave.guard';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';
import { courseResolver } from './services/resolvers/course.resolver';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', // http://localhost:4200/login
    component: LoginComponent,
  },
  {
    path: 'register', // http://localhost:4200/register
    component: RegisterComponent,
    canDeactivate: [leaveGuard],
  },
  {
    path: 'users', // http://localhost:4200/users
    component: UsersComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'expenses', // http://localhost:4200/expense
    component: ExpensesComponent,
  },
  {
    path: 'courses', // http://localhost:4200/courses
    component: CoursesComponent,
    children: [
      {
        path: ':courseId', // http://localhost:4200/courses/{courseId}
        component: CourseDetailComponent,
        resolve: { course: courseResolver },
      },
    ],
  },
  {
    path: '**', // executes when URL path does not match above mentioned paths
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];
