import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncalidadComponent } from './gestioncalidad.component';

describe('GestioncalidadComponent', () => {
  let component: GestioncalidadComponent;
  let fixture: ComponentFixture<GestioncalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioncalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
