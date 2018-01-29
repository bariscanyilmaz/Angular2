import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HelloComponent} from './hello';
import {WeatherComponent} from './weather';
import {AppComponent } from './app.component';
import {GuardDeactiveComponent } from './GuardDeactive';
import { GuardActiveComponent } from './GuardActive';

const appRoutes: Routes = [
  { path: 'Main', component: AppComponent,canDeactivate:[GuardDeactiveComponent] },
  { path: 'Hello', component: HelloComponent },
  { path: 'Weather', component: WeatherComponent,canActivate:[GuardActiveComponent] },
  { path: '', component: AppComponent }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);