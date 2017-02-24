import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPhoneValidatorComponent } from './phone-validator.component';

describe('PhoneValidatorComponent', () => {
  let component: FormPhoneValidatorComponent;
  let fixture: ComponentFixture<FormPhoneValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPhoneValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPhoneValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
