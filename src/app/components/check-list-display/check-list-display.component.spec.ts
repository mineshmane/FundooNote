import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListDisplayComponent } from './check-list-display.component';

describe('CheckListDisplayComponent', () => {
  let component: CheckListDisplayComponent;
  let fixture: ComponentFixture<CheckListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
