import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup 
  user:User = new User();
  public token:string = '';
  constructor(
    private _auth:AuthService,
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _router:Router
  ) {
    this.loginForm = this._fb.group({
      user:['',Validators.compose([Validators.required,Validators.maxLength(20)])],
      password: ['',Validators.compose([Validators.required,Validators.maxLength(50)])]
    })
   }

  ngOnInit(): void {
  }
  iniciarSesion({user,password}:{user:any,password:any}):void{
      this._auth.signin(user,password).subscribe((token)=>{
     
          this._snackBar.open('Correct!!', 'Close', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          //this._auth.logged = true
          localStorage.setItem("token", token.accessToken);
          this._router.navigate(['/allmovies']);

      },(error)=>{
        this._snackBar.open('Ups, something is wrong!!. Please try again', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      });
     
      
  }
 
}
