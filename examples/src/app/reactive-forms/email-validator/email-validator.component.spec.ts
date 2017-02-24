import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormEmailValidatorComponent } from './email-validator.component';

describe('EmailValidatorComponent', () => {
  let component: ReactiveFormEmailValidatorComponent;
  let fixture: ComponentFixture<ReactiveFormEmailValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormEmailValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormEmailValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
