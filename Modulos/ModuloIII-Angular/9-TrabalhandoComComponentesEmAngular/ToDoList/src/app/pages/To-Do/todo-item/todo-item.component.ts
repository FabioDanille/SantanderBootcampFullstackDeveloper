import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {
    id: 0,
    title: '',
    done: false,
  };
  done = false;

  @Output() remove = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  removeToDo():void {
    this.remove.emit(this.todo); // enviando o pedido de delete ao componente pai (todo-list)
  }

  markAsDone():void {
    this.done = true;
  }

}
