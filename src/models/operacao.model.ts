export class Operacao {
  nome: string = '';
  img: string = '';
  icon: boolean = true;

  constructor(nome: string, img: string, icon: boolean) {
    this.nome = nome;
    this.img = img;
    this.icon = icon
  }
}

