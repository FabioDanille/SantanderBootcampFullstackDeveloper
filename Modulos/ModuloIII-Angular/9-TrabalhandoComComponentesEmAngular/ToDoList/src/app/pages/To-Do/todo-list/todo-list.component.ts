import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  toDos: Array<Todo> = [];
  todo: Todo = {
    id: 0,
    title: '',
    done: false,
  }

  constructor() { }

  ngOnInit(): void {
    let items: any = localStorage.getItem('toDos'); // Pegou o que estava no storage vindo como JSON.stringfy
    let toDosRecuperados = JSON.parse(items) // fazendo voltar a ser array de objetos
    if(!toDosRecuperados) {
      this.toDos = [];
    }else {
      this.toDos = toDosRecuperados;
    }
  }

  addToDo(title: string) {
    const id = this.toDos.length + 1;
    this.toDos.push({
      id: id,
      title: title,
      done: false,
    });
    // console.log(this.toDos); // só para mostrar o botão funcionando

    localStorage.setItem('toDos', JSON.stringify(this.toDos)); // Adicionando armazenamento LOCAL, para tanto foi transformado o array de objetos em string
  }
  removeToDo(todo: any) {
    let index = this.toDos.indexOf(todo);
    this.toDos.splice(index, 1);
    localStorage.setItem('toDos', JSON.stringify(this.toDos)); // pra remover do localstorage quando excluir
  }

}
