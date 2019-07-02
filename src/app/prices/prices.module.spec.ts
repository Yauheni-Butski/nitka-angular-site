import { PricesModule } from './prices.module';

describe('PricesModule', () => {
  let pricesModule: PricesModule;

  beforeEach(() => {
    pricesModule = new PricesModule();
  });

  it('should create an instance', () => {
    expect(pricesModule).toBeTruthy();
  });
});
