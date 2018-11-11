import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoControlcalidadComponent } from './recurso-controlcalidad.component';

describe('RecursoControlcalidadComponent', () => {
  let component: RecursoControlcalidadComponent;
  let fixture: ComponentFixture<RecursoControlcalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoControlcalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoControlcalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
