import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminanteComponent } from './determinante.component';

describe('DeterminanteComponent', () => {
  let component: DeterminanteComponent;
  let fixture: ComponentFixture<DeterminanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeterminanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeterminanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
