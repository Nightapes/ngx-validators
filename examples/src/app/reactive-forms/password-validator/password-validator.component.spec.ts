import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPasswordValidatorComponent } from './password-validator.component';

describe('PasswordValidatorComponent', () => {
  let component: ReactiveFormPasswordValidatorComponent;
  let fixture: ComponentFixture<ReactiveFormPasswordValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormPasswordValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormPasswordValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
