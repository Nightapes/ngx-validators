import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibOverviewComponent } from './lib-overview.component';

describe('LibOverviewComponent', () => {
  let component: LibOverviewComponent;
  let fixture: ComponentFixture<LibOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
