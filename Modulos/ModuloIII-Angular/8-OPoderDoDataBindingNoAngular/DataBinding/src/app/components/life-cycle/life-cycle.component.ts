import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, 
DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked,
 AfterViewInit, OnDestroy {

  @Input() number = 10;

  constructor() {
    console.log('chamou o Construtor');
   }

   ngOnChanges(): void { // qnd há alteração no input
    console.log('chamou o On Changes');
   }

   ngOnInit(): void { // qnd componente é renderizado, chamado única vez
    console.log('chamou o On Init');
  }
  
   ngDoCheck(): void { // a cada ciclo de alteração
    console.log('chamou o Do Check');
   }

   ngAfterContentInit(): void { // qnd há alteração
    console.log('chamou o After Content Init');
   }

   ngAfterContentChecked(): void { // qnd há alteração
    console.log('chamou o After Content Checked');
   }

   ngAfterViewInit(): void{ // qnd há alteração
    console.log('chamou o After View Init');
   }

   ngAfterViewChecked(): void { // qnd há alteração
    console.log('chamou o After View Checked');
   }

   ngOnDestroy(): void { // qnd ocmponente é destruído
    console.log('chamou o On Destroy');
   }
}
