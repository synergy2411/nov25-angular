import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((response) => {
        console.log('[INCOMING RESPONSE]', response);
      }),
      catchError((err: HttpErrorResponse) => {
        let errMessage = 'Something went wrong';
        if (err.error instanceof ErrorEvent) {
          // client side error
          errMessage = `ERROR : ${err.error.message}`;
        } else {
          // Server side error
          errMessage = `ERROR MESSAGE: ${err.message}, ERROR STATUS : ${err.status}`;
          if (err.status === 401) {
            console.error('Unauthorized');
          } else if (err.status === 404) {
            console.error('Resource not found');
          }
        }
        console.error(errMessage);
        return throwError(() => new Error(errMessage));
      })
    );
  }
}
