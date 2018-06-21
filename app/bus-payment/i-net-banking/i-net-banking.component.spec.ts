import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { INetBankingComponent } from './i-net-banking.component';

describe('INetBankingComponent', () => {
  let component: INetBankingComponent;
  let fixture: ComponentFixture<INetBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ INetBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(INetBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
