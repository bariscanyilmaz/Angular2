import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    routing      
  ],
  providers: [PersonService,GuardDeactiveComponent,GuardService,GuardActiveComponent],
  bootstrap: [MenuComponent]
  
})
export class AppModule { }
