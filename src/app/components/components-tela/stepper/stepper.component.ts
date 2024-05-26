import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent implements OnInit {

  @Input() operacao: string = ''
  segundoGrafo: boolean = false

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

  constructor(private _formBuilder: FormBuilder) {}
}
