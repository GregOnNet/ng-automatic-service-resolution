import { Component } from '@angular/core';
import { Customer } from './customer.model';
import { ModelDataProvider } from './model-data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'di-decorator';

  constructor(private modelDataProvider: ModelDataProvider) {
    const customer = new Customer();
    this.modelDataProvider.save(customer);
  }
}
