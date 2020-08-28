import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { ModelDataProvider } from './model-data-provider.service';

@Injectable({ providedIn: 'root' })
export class CustomerDataProvider implements ModelDataProvider<Customer> {
  save(model: Customer): void {
    console.log('Save', model);
  }
}
