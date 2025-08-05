import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Для работы с ngModel

import { AppComponent } from './app.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Убедись, что FormsModule здесь
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
