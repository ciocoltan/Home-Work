import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiuserdetailComponent } from './apiuserdetail.component';

describe('ApiuserdetailComponent', () => {
  let component: ApiuserdetailComponent;
  let fixture: ComponentFixture<ApiuserdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiuserdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiuserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
