import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleComponent } from './components/playground/life-cycle/life-cycle.component';
import { DirectivesDemoComponent } from './components/playground/directives-demo/directives-demo.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { PipeDemoComponent } from './components/playground/pipe-demo/pipe-demo.component';

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
  ],
  imports: [
    // Imports module functionality
    BrowserModule,
    FormsModule,
  ],
  providers: [], // Creates tokens and register the Services
  bootstrap: [AppComponent],
})
export class AppModule {}
