import { Injectable, Injector } from '@angular/core';
import { RuleTarget } from './rule.decorator';

export interface DataProvider<T> {
  save(model: T): void;
}

@Injectable({ providedIn: 'root' })
export class ModelDataProvider {
  constructor(private injector: Injector) {}

  save<T>(model: T): void {
    const dataProviderToken = ((model as unknown) as RuleTarget).µµrule
      ?.persistence.dataProvider;

    const dataProvider = this.injector.get(dataProviderToken) as DataProvider<
      T
    >;

    dataProvider.save(model);
  }
}
