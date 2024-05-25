import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.css'
})
export class AppbarComponent implements OnInit {
  @Input() titulo: string = ''

  opecacoes: string[] = ['Soma', 'Subtração', 'Multiplicação', 'Divisão', 'Transposta', 'Determinante', 'Inversa']

  ngOnInit(): void {

  }

  constructor() {}
}