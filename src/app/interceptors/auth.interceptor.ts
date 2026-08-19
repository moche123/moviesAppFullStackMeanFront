import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  if (req.url.includes('/refresh-token') || req.url.includes('/signin') || req.url.includes('/signup')) {
    return next(req);
  }

  const accessToken = auth.getAccessToken();
  const authReq = accessToken
    ? req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } })
    : req;

  return next(authReq).pipe(
    catchError((error: unknown) => {
      const isAuthError = error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403);
      if (isAuthError && auth.getRefreshToken()) {
        return auth.refreshAccessToken().pipe(
          switchMap((newAccessToken) => {
            const retryReq = req.clone({ setHeaders: { Authorization: `Bearer ${newAccessToken}` } });
            return next(retryReq);
          }),
          catchError((refreshError) => {
            auth.clearTokens();
            return throwError(() => refreshError);
          })
        );
      }
      return throwError(() => error);
    })
  );
};
