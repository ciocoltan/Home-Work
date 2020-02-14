import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson5servicesComponent } from './lesson5services.component';

describe('Lesson5servicesComponent', () => {
  let component: Lesson5servicesComponent;
  let fixture: ComponentFixture<Lesson5servicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson5servicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson5servicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
