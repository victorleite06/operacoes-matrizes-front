import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
  @Output() receberMatriz = new EventEmitter<Matrix>()
  matrizManipulacao: number[][] = new Array(this.linhas).fill(false).map(() => new Array(this.colunas).fill(0) );

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['linhas'] && changes['linhas'].currentValue) {
      this.linhas = changes['linhas'].currentValue
      this.initMatriz()
    }

    if(changes['colunas'] && changes['colunas'].currentValue) {
      this.colunas = changes['colunas'].currentValue
      this.initMatriz()
    }

    if(changes['matriz'] && changes['matriz'].currentValue) {
      this.matriz = changes['matriz'].currentValue
    }
  }

  initMatriz() {
    let matriz: number[][] = new Array(this.linhas)
    .fill(false)
    .map(() =>
      new Array(this.colunas).fill(0)
    );
    this.matrizManipulacao = matriz
    this.matriz = new Matrix(this.linhas, this.colunas, this.matrizManipulacao)
  }

  retornarMatriz() {
    this.receberMatriz.emit(new Matrix(this.linhas, this.colunas, this.matrizManipulacao));
  }
}
