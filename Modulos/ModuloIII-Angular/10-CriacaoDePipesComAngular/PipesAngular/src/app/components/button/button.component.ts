import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

//decorator - nome - tipagem 
@Input() btntext: string = 'Clique';
@Input() btntype: string = '';
@Output() clickChildren = new EventEmitter;
textFilho = 'clicou no filho';
  constructor() { }

  ngOnInit(): void {
  }

  clicou(){
    this.clickChildren.emit(this.textFilho);
  }

}
