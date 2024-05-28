import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Matrix } from 'ts-matrix';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent implements OnInit, OnChanges {

  @ViewChild('stepper') private stepper?: MatStepper;


  @Input() operacao: string = ''
  segundaMatriz: boolean = false
  constanteOperacao: number = 1

  operacoesPermSegundaMatriz: string[] = ['Soma', 'Subtração']
  permiteSegundaMatriz: boolean = false

  linhas: number = 1
  colunas: number = 1
  matriz1: Matrix = new Matrix(this.linhas, this.colunas)
  matriz2?: Matrix

  configFormGroup = this._formBuilder.group({});
  matrizUmFormGroup = this._formBuilder.group({});
  matrizDoisFormGroup = this._formBuilder.group({});

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['operacao'] && changes['operacao'].currentValue) {
      this.operacao = changes['operacao'].currentValue
      this.linhas = 1
      this.colunas = 1
      this.verificarTipoOperacao()
      this.stepper!.reset()

    }
  }

  verificarTipoOperacao(){
    this.permiteSegundaMatriz = this.operacoesPermSegundaMatriz.includes(this.operacao)
  }

  constructor(private _formBuilder: FormBuilder) {}
}
