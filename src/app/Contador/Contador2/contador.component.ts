import {Component} from '@angular/core';

@Component  ({
  selector: 'app-contador',
  template: `
          <h1>{{titulo}}</h1>

          <button (click)="sumar()"> + 1 </button>

          <span> {{ numero }} </span>

          <button (click)="resta()"> - 1 </button>
  `
})


export class contadorComponent {
        titulo : string = 'Contador App';
        numero : number = 0;

        sumar () {
          this.numero += 1;
        }

        resta () {
          this.numero -= 1;
      }
}
