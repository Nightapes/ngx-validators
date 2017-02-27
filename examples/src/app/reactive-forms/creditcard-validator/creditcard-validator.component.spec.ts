import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCreditcardValidatorComponent } from './creditcard-validator.component';

describe('CreditcardValidatorComponent', () => {
  let component: ReactiveFormCreditcardValidatorComponent;
  let fixture: ComponentFixture<ReactiveFormCreditcardValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormCreditcardValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormCreditcardValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
