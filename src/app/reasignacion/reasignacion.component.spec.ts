import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasignacionComponent } from './reasignacion.component';

describe('ReasigancionComponent', () => {
  let component: ReasignacionComponent;
  let fixture: ComponentFixture<ReasignacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasignacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
