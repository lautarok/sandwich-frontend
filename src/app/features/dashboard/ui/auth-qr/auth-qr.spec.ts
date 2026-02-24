import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthQr } from './auth-qr';

describe('AuthQr', () => {
  let component: AuthQr;
  let fixture: ComponentFixture<AuthQr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthQr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthQr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
