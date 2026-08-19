import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatHint, MatButton, MatIcon, RouterLink]
})
export class SignupComponent {
  signupForm: UntypedFormGroup;

  constructor(
    private _auth: AuthService,
    private _fb: UntypedFormBuilder,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {
    this.signupForm = this._fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(40)])],
      user: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(50)])]
    });
  }

  crearCuenta({name, user, password}: {name:any, user:any, password:any}): void {
    this._auth.signup(name, user, password).subscribe({
      next: () => {
        this._snackBar.open('Account created!', 'Close', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this._router.navigate(['/allmovies']);
      },
      error: () => {
        this._snackBar.open('Ups, something is wrong!!. Please try again', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }
}
