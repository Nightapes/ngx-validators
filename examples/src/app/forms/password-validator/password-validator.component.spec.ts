import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPasswordValidatorComponent } from './password-validator.component';

describe('PasswordValidatorComponent', () => {
  let component: FormPasswordValidatorComponent;
  let fixture: ComponentFixture<FormPasswordValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPasswordValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPasswordValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
