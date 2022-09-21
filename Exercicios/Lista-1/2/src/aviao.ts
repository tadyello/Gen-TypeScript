export class Aviao {
    cia : string;
    modelo : string;
    nivelCombustivel : string;

constructor(
    cia : string,
    modelo : string,
    nivelCombustivel : string
){
    this.cia = cia;
    this.modelo = modelo;
    this.nivelCombustivel = nivelCombustivel;
}mostrarInfo(){
    console.log(`Informações do avião`,`\nCompanhia aérea: ${this.cia}`,`\nModelo: ${this.modelo}`,`\nNível de combustível: ${this.nivelCombustivel}`);
}abastecer(){
    if (this.nivelCombustivel == "baixo"){
        console.log(`O avião precisa ser abastecido imediatamente!`);
    }else{
        console.log(`O nível de combustível da aeronave está Ok.`);
    }
    
}
    
}