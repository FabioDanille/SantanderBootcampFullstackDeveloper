import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

//decorator - nome - tipagem 
@Input() btntext: string = 'Clique';
@Input() btntype: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
