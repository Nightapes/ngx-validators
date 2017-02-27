import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPhoneValidatorComponent } from './phone-validator.component';

describe('PhoneValidatorComponent', () => {
  let component: ReactiveFormPhoneValidatorComponent;
  let fixture: ComponentFixture<ReactiveFormPhoneValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormPhoneValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormPhoneValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
