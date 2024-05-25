import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InversaComponent } from './inversa.component';

describe('InversaComponent', () => {
  let component: InversaComponent;
  let fixture: ComponentFixture<InversaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InversaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InversaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
