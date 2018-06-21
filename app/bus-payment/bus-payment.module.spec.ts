import { BusPaymentModule } from './bus-payment.module';

describe('BusPaymentModule', () => {
  let busPaymentModule: BusPaymentModule;

  beforeEach(() => {
    busPaymentModule = new BusPaymentModule();
  });

  it('should create an instance', () => {
    expect(busPaymentModule).toBeTruthy();
  });
});
