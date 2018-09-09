import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeviewerComponent } from './codeviewer.component';

describe('CodeviewerComponent', () => {
  let component: CodeviewerComponent;
  let fixture: ComponentFixture<CodeviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
