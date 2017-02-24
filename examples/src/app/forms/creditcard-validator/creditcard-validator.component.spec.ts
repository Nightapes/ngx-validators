import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreditcardValidatorComponent } from './creditcard-validator.component';

describe('CreditcardValidatorComponent', () => {
  let component: FormCreditcardValidatorComponent;
  let fixture: ComponentFixture<FormCreditcardValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreditcardValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreditcardValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
