//import uuid
import { v4 as uuidv4 } from 'uuid';

export class Todo{
    id: string = uuidv4();
    texto:string;
    completado:boolean = false;

    constructor(texto:string){
        this.texto = texto
    }
}