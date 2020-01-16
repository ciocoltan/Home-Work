import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLessonsComponent } from './angular-lessons.component';

describe('AngularLessonsComponent', () => {
  let component: AngularLessonsComponent;
  let fixture: ComponentFixture<AngularLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
