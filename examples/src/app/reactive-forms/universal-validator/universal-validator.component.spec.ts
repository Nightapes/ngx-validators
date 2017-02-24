import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormUniversalValidatorComponent } from './universal-validator.component';

describe('UniversalValidatorComponent', () => {
  let component: ReactiveFormUniversalValidatorComponent;
  let fixture: ComponentFixture<ReactiveFormUniversalValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormUniversalValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormUniversalValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
