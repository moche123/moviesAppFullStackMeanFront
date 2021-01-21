import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllmoviesComponent } from './components/allmovies/allmovies.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'signin',
    component:SigninComponent,
  },
  {
    path:'allmovies',
    component:AllmoviesComponent,
    canActivate:[AuthGuard]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
