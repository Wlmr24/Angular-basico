import {Component} from '@angular/core'

@Component ({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class heroeComponent {
    nombre: string = 'batman';
    edad: number = 35
    ciudad: string = 'gotica'

    get nombreMayuscula(): string {
      return this.nombre.toUpperCase ()
    }

    obtenerNombre(): string {
      return `${this.nombre} - ${this.edad} - ${this.ciudad} `;
    }

    cambiarNombre (): void {
      this.nombre = 'Iron man';
    }

    cambiarCiudad ():void {
      this.ciudad = 'New york'
    }

    cambiarEdad(): void {
      this.edad = 31
    }
}
