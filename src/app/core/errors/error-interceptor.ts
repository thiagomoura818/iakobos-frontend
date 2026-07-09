// src/app/core/errors/error.interceptor.ts
import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { extractErrorMessage } from './error-utils';
import { NotificationService } from '../services/notification-service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return next(req).pipe(
    catchError((error) => {
      // 401 — token expirou ou inválido
      if (error.status === 401) {
        authService.logout();
        router.navigate(['/login']);
        notification.show('Sua sessão expirou. Faça login novamente.', 'warning');
      }

      // 0 — sem conexão
      if (error.status === 0) {
        notification.show(extractErrorMessage(error), 'error');
      }

      // SEMPRE re-throw — assim os subscribers locais ainda podem tratar
      return throwError(() => error);
    })
  );
};
