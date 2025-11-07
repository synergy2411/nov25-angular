import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
})
export class CountryCodePipe implements PipeTransform {
  transform(value: number, code?: string) {
    // console.log('TRANSFORM');
    switch (code) {
      case 'USA':
        return '+1 ' + value;
      case 'SIG':
        return '+65 ' + value;
      case 'AUS':
        return '+61 ' + value;
      case 'SWZ':
        return '+41 ' + value;
      default:
        return '+91 ' + value;
    }
  }
}
