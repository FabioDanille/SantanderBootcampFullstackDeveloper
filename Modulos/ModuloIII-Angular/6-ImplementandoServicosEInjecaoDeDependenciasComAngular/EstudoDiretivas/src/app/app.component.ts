import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'Fabio Correia';
  text = '';

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ];

  constructor(private peopleService: PeopleService){

  }

  ngOnInit() {
    this.getPeople();
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval) // parar o invervalo
      }
    }, 1000)
  }

  clicou(nome: string): void{
    console.log('Clicou no botão', nome);
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }

}
