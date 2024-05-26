import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent implements OnInit, OnChanges {

  @Input() operacao: string = ''
  segundaMatriz: boolean = false
  constanteOperacao: number = 1

  operacoesPermSegundaMatriz: string[] = ['Soma', 'Subtração', 'Multiplicação', 'Divisão']
  permiteSegundaMatriz: boolean = false

  linhas: number = 1
  colunas: number = 1

  configFormGroup = this._formBuilder.group({});
  matrizUmFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  matrizDoisFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['operacao'] && changes['operacao'].currentValue) {
      this.operacao = changes['operacao'].currentValue
      this.linhas = 1
      this.colunas = 1
      this.verificarTipoOperacao()

    }
  }

  verificarTipoOperacao(){
    if(this.operacoesPermSegundaMatriz.includes(this.operacao)) {
      this.permiteSegundaMatriz = true
    }
  }

  constructor(private _formBuilder: FormBuilder) {}
}
