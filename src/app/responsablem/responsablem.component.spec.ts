import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsablemComponent } from './responsablem.component';

describe('ResponsablemComponent', () => {
  let component: ResponsablemComponent;
  let fixture: ComponentFixture<ResponsablemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsablemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsablemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
