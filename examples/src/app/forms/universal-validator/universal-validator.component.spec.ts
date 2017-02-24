import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUniversalValidatorComponent } from './universal-validator.component';

describe('UniversalValidatorComponent', () => {
  let component: FormUniversalValidatorComponent;
  let fixture: ComponentFixture<FormUniversalValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUniversalValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUniversalValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
