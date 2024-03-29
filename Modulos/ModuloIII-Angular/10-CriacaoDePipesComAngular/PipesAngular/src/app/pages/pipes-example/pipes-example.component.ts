import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = 'Hello World!';
  date = new Date; // traz informações da data atual

  pessoa = {
    nome: 'Ivonaldo',
    idade: '26',
    profissao: 'programador'
  };

  nomes = ['Ivonaldo', 'Ana', 'Maria'];

  constructor() { }

  ngOnInit(): void {
  }

  mudaValor(){
    this.number = 123456789;
  }

  add(text: string){
    this.nomes.push(text);
  }

}
