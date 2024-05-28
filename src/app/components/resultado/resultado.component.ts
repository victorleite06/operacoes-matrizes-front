import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Matrix } from 'ts-matrix';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent implements OnChanges {

  @Input() matrizA!: Matrix
  @Input() matrizB?: Matrix
  @Input() linhas: number = 1
  @Input() colunas: number = 1
  @Input() operacao!: string
  @Input() constante?: number
  @Input() segundaMatriz: boolean = false

  resultante: Matrix = new Matrix(this.linhas, this.colunas)
  resultado?: number

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['matrizA'] && changes['matrizA'].currentValue) {
      this.matrizA = changes['matrizA'].currentValue
    }

    if(changes['matrizB'] && changes['matrizB'].currentValue) {
      this.matrizB = changes['matrizB'].currentValue
    }

    if(changes['linhas'] && changes['linhas'].currentValue) {
      this.linhas = changes['linhas'].currentValue
    }

    if(changes['colunas'] && changes['colunas'].currentValue) {
      this.colunas = changes['colunas'].currentValue
    }

    if(changes['constante'] && changes['constante'].currentValue) {
      this.constante = changes['constante'].currentValue
    }

    if(changes['segundaMatriz'] && changes['segundaMatriz'].currentValue) {
      this.segundaMatriz = changes['segundaMatriz'].currentValue
    }

    if(changes['operacao'] && changes['operacao'].currentValue) {
      this.operacao = changes['operacao'].currentValue
    }

    this.gerarResultante()
  }

  gerarResultante() {
    switch (this.operacao) {
      case 'Soma':
        this.resultante = this.realizarSoma()
        break;

      case 'Subtração':
        this.resultante = this.realizarSubtracao()
        break;

      case 'Multiplicação':
        this.resultante = this.matrizA.multiply(this.matrizB!)
        break;

      case 'Transposta':
        this.resultante = this.matrizA.transpose()
        break;

      case 'Determinante':
        this.resultado = this.matrizA.determinant()
        break;

      case 'Inversa':
        this.resultante = this.matrizA.inverse()
        break;

      case 'Cofatores':
        this.resultante = this.getCofactor(this.matrizA)
        break;

      default:
        break;
    }
  }

  realizarSoma(): Matrix {
    let matriz: number[][] = new Array(this.linhas)
    .fill(false)
    .map(() =>
      new Array(this.colunas).fill(0)
    );

    if(this.segundaMatriz) {
      for(let i = 0; i < this.linhas; i++) {
        for(let j = 0; j < this.colunas; j++) {
          matriz[i][j] = this.matrizA.values[i][j] + this.matrizB!.values[i][j]
        }
      }
    } else {
      for(let i = 0; i < this.linhas; i++) {
        for(let j = 0; j < this.colunas; j++) {
          matriz[i][j] = this.matrizA.values[i][j] + this.constante!
        }
      }
    }

    return new Matrix(this.linhas, this.colunas, matriz)
  }

  realizarSubtracao(): Matrix {
    let matriz: number[][] = new Array(this.linhas)
    .fill(false)
    .map(() =>
      new Array(this.colunas).fill(0)
    );

    if(this.segundaMatriz) {
      for(let i = 0; i < this.linhas; i++) {
        for(let j = 0; j < this.colunas; j++) {
          matriz[i][j] = this.matrizA.values[i][j] - this.matrizB!.values[i][j]
        }
      }
    } else {
      for(let i = 0; i < this.linhas; i++) {
        for(let j = 0; j < this.colunas; j++) {
          matriz[i][j] = this.matrizA.values[i][j] - this.constante!
        }
      }
    }

    return new Matrix(this.linhas, this.colunas, matriz)
  }

  getCofactor(matrizA: Matrix): Matrix {
    let matriz: number[][] = new Array(this.linhas)
    .fill(false)
    .map(() =>
      new Array(this.colunas).fill(0)
    );

    for(let i = 0; i < this.linhas; i++) {
      for(let j = 0; j < this.colunas; j++) {
        matriz[i][j] = matrizA.getCofactor(i,j).determinant()
      }
    }
    return new Matrix(this.linhas, this.colunas, matriz)
  }
}
