import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasigancionComponent } from './reasignacion.component';

describe('ReasigancionComponent', () => {
  let component: ReasigancionComponent;
  let fixture: ComponentFixture<ReasigancionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasigancionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasigancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
