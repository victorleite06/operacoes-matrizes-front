import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMatrizComponent } from './mostrar-matriz.component';

describe('MostrarMatrizComponent', () => {
  let component: MostrarMatrizComponent;
  let fixture: ComponentFixture<MostrarMatrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarMatrizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarMatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
