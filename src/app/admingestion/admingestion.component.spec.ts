import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingestionComponent } from './admingestion.component';

describe('AdmingestionComponent', () => {
  let component: AdmingestionComponent;
  let fixture: ComponentFixture<AdmingestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
