import { Routes } from '@angular/router';
import { AllmoviesComponent } from './components/allmovies/allmovies.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'signin',
    component:SigninComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'allmovies',
    component:AllmoviesComponent,
    canActivate:[authGuard]
  }
];
