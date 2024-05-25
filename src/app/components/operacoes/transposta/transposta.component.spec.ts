import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspostaComponent } from './transposta.component';

describe('TranspostaComponent', () => {
  let component: TranspostaComponent;
  let fixture: ComponentFixture<TranspostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranspostaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranspostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
