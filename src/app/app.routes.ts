import { Routes } from '@angular/router';
import { SignupComponent } from './modules/signup/signup.component';
import { PathUnavailableComponent } from './modules/path-unavailable/path-unavailable.component';

/* path should be /signup */
export const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: '**', component: PathUnavailableComponent },
];
