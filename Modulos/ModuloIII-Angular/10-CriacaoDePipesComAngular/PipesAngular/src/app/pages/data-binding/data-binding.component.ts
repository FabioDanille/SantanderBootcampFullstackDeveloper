import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Fabio Correia';
  saudacao = ', sejam bem-vindos aos estudos em Angular';
  
  imageUrl = 'https://images.pexels.com/photos/12406354/pexels-photo-12406354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  imageDesc = 'Cadeiras';

  buttonText = 'Clique aqui';
  textRed = true;

  bgColor = 'green';

  textInput = '';

  // Aula ciclo vida
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  retornaSaudacao(){
    return this.saudacao;
  }

  clicou(){
    this.textRed = true;
     console.log('clicou aqui')
  }

  clicouNoFilho(text: any){
    console.log(text);
  }

  incrementa(){
    this.number++;
  }

  destroyComponent(){
    this.destroy = true;
  }
}
