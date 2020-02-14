import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson6routingComponent } from './lesson6routing.component';

describe('Lesson6routingComponent', () => {
  let component: Lesson6routingComponent;
  let fixture: ComponentFixture<Lesson6routingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson6routingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson6routingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
