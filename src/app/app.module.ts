import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
//Angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AllmoviesComponent } from './components/allmovies/allmovies.component';
import { CardComponent } from './components/card/card.component';


@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        SignupComponent,
        SigninComponent,
        AllmoviesComponent,
        CardComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        //Angular material
        BrowserAnimationsModule,
        MatGridListModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule], providers: [provideHttpClient(withXhr(), withInterceptors([authInterceptor]), withInterceptorsFromDi())] })
export class AppModule { }
