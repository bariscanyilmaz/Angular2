import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RatingModule } from 'ngx-bootstrap/rating';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {capitalLetter} from './capitalLetter';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list.component';
import { PersonService } from './personService';
import {HelloComponent} from './hello';
import {WeatherComponent} from './weather';
import {routing} from './app.routing';
import {MenuComponent} from './app.menu';
import {GuardDeactiveComponent} from './GuardDeactive';
import {GuardService} from './GuardService';
import {GuardActiveComponent} from './GuardActive';
import {FormPost} from '../Server/form-post.server';


@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    capitalLetter,
    HelloComponent,
    WeatherComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BsDatepickerModule.forRoot(),
    RatingModule.forRoot()    
  ],
  providers: [PersonService,GuardDeactiveComponent,GuardService,GuardActiveComponent,FormPost],
  bootstrap: [MenuComponent]
  
})
export class AppModule { }
