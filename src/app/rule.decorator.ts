import { Type } from '@angular/core';

export interface RuleTarget extends Function {
  µµrule?: RuleConfig;
}

interface RuleConfig {
  persistence: {
    dataProvider: Type<any>;
  };
}

export function Rule(config: RuleConfig): ClassDecorator {
  return function annotate<TFunction extends RuleTarget>(
    target: TFunction
  ): TFunction {
    return class extends (target as any) {
      µµrule = config;
    } as any;
  };
}
