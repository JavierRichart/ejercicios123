import { ESTADOS } from "./estado.enum";

export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    conectado = ESTADOS.ENLINEA

    constructor(nombre, apellido, email, conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }

}