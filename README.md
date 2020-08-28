# Automatic Service Resolution

## @Rule Decorator

Specify which service should be used to do persistence for the respective model.

```ts
// customer.model.ts

@Rule({
  persistence: {
    dataProvider: CustomerDataProvider,
  },
})
export class Customer {}
```

## Service

Write an ordinary Angular service.

```ts
// customer-data-provider.service.ts

@Injectable({ providedIn: "root" })
export class CustomerDataProvider {
  save(model: Customer): void {
    console.log("Save", model);
  }
}
```

## Usage

Inject the general `ModelDataProvider` into your component and work with the
model.

`ModelDataProvider` will automatically use the correct service in order to
do CRUD operations with your model.

```ts
// app.component.ts

export class AppComponent {
  constructor(private modelDataProvider: ModelDataProvider) {
    const customer = new Customer();
    this.modelDataProvider.save(customer);
  }
}
```
