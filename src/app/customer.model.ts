import { CustomerDataProvider } from './customer-data-provider.service';
import { Rule } from './rule.decorator';

@Rule({
  persistence: {
    dataProvider: CustomerDataProvider,
  },
})
export class Customer {}
