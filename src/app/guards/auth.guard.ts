import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  if (auth.isLoggedIn()) {
    return true;
  }

  snackBar.open('You cannot enter, maybe you sessión expired, you have llogout or you have not registered yet', 'Close', {
    duration: 3500,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  });
  router.navigate(['/signin']);
  return false;
};
