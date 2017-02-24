import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmailValidatorComponent } from './email-validator.component';

describe('EmailValidatorComponent', () => {
  let component: FormEmailValidatorComponent;
  let fixture: ComponentFixture<FormEmailValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmailValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmailValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
