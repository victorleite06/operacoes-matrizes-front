import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrl: './soma.component.css'
})
export class SomaComponent implements OnInit {

  configFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
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
