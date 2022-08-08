import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  toDos: Array<Todo> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addToDo(title: string) {
    const id = this.toDos.length + 1;
    this.toDos.push(new Todo(id, title, false));
    console.log(this.toDos);
  }

}
