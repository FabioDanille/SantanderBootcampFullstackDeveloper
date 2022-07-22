import { Component } from '@angular/core';

@Component({
  selector: 'app-root',/* cria a 'tag' para o html */
  templateUrl: './app.component.html', /* seleciona o html para o visual */
  styleUrls: ['./app.component.css'] /* seleciona o css */
})
export class AppComponent {
  title = 'course-manager'; /* reflete no app.component */

  name: string = 'John';
}
