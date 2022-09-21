import { Animal } from "./animal";

export class Preguica extends Animal{
    cor: string;

    constructor(
        cor: string,
        especie: string,
        idade: number,
        familia: string,
        nome: string
    ){
       super(especie, idade, familia, nome);
        this.cor = cor ;
    }

    correr(){
        console.log("Correndo como uma preguiça!");
    }

    som(){
        console.log("rrrrrrrr");
    }

 


}