import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Matrix } from 'ts-matrix';

@Component({
  selector: 'app-mostrar-matriz',
  templateUrl: './mostrar-matriz.component.html',
  styleUrl: './mostrar-matriz.component.css'
})
export class MostrarMatrizComponent implements OnChanges {

  @Input() preview: boolean = false
  @Input() linhas: number = 1
  @Input() colunas: number = 1
  @Input() matriz: Matrix = new Matrix(this.linhas, this.colunas)

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['linhas'] && changes['linhas'].currentValue) {
      this.linhas = changes['linhas'].currentValue
      if(this.preview) this.preencherPreview()
    }

    if(changes['colunas'] && changes['colunas'].currentValue) {
      this.colunas = changes['colunas'].currentValue
      if(this.preview) this.preencherPreview()
    }

    if(changes['matriz'] && changes['matriz'].currentValue) {
      this.matriz = changes['matriz'].currentValue
    }
  }

  preencherPreview() {
    let matriz: number[][] = new Array(this.linhas)
    .fill(false)
    .map(() =>
      new Array(this.colunas).fill(0)
    );
    this.matriz = new Matrix(this.linhas, this.colunas, matriz)
  }
}
