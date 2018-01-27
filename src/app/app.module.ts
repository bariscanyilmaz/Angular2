import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {capitalLetter} from './capitalLetter';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list.component';
import { PersonService } from './personService';


@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    capitalLetter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule      
  ],
  providers: [PersonService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
