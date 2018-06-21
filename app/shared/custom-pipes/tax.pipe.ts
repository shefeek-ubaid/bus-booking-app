import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(amount: any, taxPercent?: any): any {
    if (amount) {
      return (amount + ((amount * taxPercent) / 100));
    } else {
      return 0;
    }
  }

}
