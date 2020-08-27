import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({ providedIn: 'root' })
export class CustomerDataProvider {
  save(model: Customer): void {
    console.log('Save', model);
  }
}
