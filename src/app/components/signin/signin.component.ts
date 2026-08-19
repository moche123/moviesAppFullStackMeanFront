import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatHint, MatButton, MatIcon, RouterLink]
})
export class SigninComponent {
  loginForm!: UntypedFormGroup
  user:User = new User();
  constructor(
    private _auth:AuthService,
    private _fb: UntypedFormBuilder,
    private _snackBar: MatSnackBar,
    private _router:Router
  ) {
    this.loginForm = this._fb.group({
      user:['',Validators.compose([Validators.required,Validators.maxLength(20)])],
      password: ['',Validators.compose([Validators.required,Validators.maxLength(50)])]
    })
   }

  iniciarSesion({user,password}:{user:any,password:any}):void{
      this._auth.signin(user,password).subscribe({
        next: ()=>{
          this._snackBar.open('Correct!!', 'Close', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this._router.navigate(['/allmovies']);
        },
        error: ()=>{
          this._snackBar.open('Ups, something is wrong!!. Please try again', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      });
  }
 
}
