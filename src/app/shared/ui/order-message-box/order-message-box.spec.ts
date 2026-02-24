import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMessageBox } from './order-message-box';

describe('OrderMessageBox', () => {
  let component: OrderMessageBox;
  let fixture: ComponentFixture<OrderMessageBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderMessageBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderMessageBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
