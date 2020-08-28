import { Injectable, Injector } from '@angular/core';
import { RuleTarget } from './rule.decorator';

export interface ModelDataProvider<T> {
  save(model: T): void;
}

@Injectable({ providedIn: 'root' })
export class DataProvider {
  constructor(private injector: Injector) {}

  save<TModel>(model: TModel): void {
    const dataProvider = this.resolveDataProvider(model);
    dataProvider.save(model);
  }

  private resolveDataProvider<TModel>(
    model: TModel
  ): ModelDataProvider<TModel> {
    const dataProviderToken = ((model as unknown) as RuleTarget).µµrule
      ?.persistence.dataProvider;

    if (!dataProviderToken) {
      throw new Error(
        '[DataProvider]: Sorry, cannot resolve data provider for given'
      );
    }

    return this.injector.get(dataProviderToken) as ModelDataProvider<TModel>;
  }
}
