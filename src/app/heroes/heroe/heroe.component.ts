import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {

    nombre: string = 'Elias';
    edad: number = 22;

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Jhonatan';
    }

    cambiarEdad(): void {
        this.edad = 17;
    }

}