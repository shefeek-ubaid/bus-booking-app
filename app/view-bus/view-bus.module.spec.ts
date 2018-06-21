import { ViewBusModule } from './view-bus.module';

describe('ViewBusModule', () => {
  let viewBusModule: ViewBusModule;

  beforeEach(() => {
    viewBusModule = new ViewBusModule();
  });

  it('should create an instance', () => {
    expect(viewBusModule).toBeTruthy();
  });
});
