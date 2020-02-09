import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApihttpusersComponent } from './apihttpusers.component';

describe('ApihttpusersComponent', () => {
  let component: ApihttpusersComponent;
  let fixture: ComponentFixture<ApihttpusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApihttpusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApihttpusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
