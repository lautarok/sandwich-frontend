import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { orderIdGuard } from './order-id-guard';

describe('orderIdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => orderIdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
