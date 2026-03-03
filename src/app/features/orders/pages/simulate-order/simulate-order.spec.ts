import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateOrder } from './simulate-order';

describe('SimulateOrder', () => {
  let component: SimulateOrder;
  let fixture: ComponentFixture<SimulateOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulateOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulateOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
