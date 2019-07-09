import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProfilePhotoComponent } from './set-profile-photo.component';

describe('SetProfilePhotoComponent', () => {
  let component: SetProfilePhotoComponent;
  let fixture: ComponentFixture<SetProfilePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetProfilePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProfilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
