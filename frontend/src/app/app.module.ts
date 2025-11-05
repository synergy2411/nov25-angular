import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
  ],
  imports: [
    // Imports module functionality
    BrowserModule,
  ],
  providers: [], // Creates tokens and register the Services
  bootstrap: [AppComponent],
})
export class AppModule {}
