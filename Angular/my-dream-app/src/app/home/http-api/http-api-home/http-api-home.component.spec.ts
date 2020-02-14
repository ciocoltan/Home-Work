import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpApiHomeComponent } from './http-api-home.component';

describe('HttpApiHomeComponent', () => {
  let component: HttpApiHomeComponent;
  let fixture: ComponentFixture<HttpApiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpApiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpApiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
