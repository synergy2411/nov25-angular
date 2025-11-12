import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    console.log('------ERROR CAUGHT------- ', error.message);
  }
}
