import { Component, Input } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  //horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  //verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) {}
  @Input() horizontalPosition:MatSnackBarHorizontalPosition = 'center' ;
  @Input() verticalPosition:MatSnackBarVerticalPosition = 'top' ;
  @Input() messageSatisfaction:string = 'Correcto';
  @Input() messageFail:string = 'Error';
  openSnackBar() {
    this._snackBar.open(this.messageSatisfaction, 'End now', {
      duration: 2500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
