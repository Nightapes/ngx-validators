import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidatorsComponent } from './reactive-form-validators.component';

describe('ReactiveFormValidatorsComponent', () => {
  let component: ReactiveFormValidatorsComponent;
  let fixture: ComponentFixture<ReactiveFormValidatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormValidatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
