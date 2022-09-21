export class celular{
    marca: string;
    modelo: string;
    operadora: string;
    
constructor(
    marca : string,
    modelo : string,
    operadora : string
){
    this.marca = marca;
    this.modelo = modelo;
    this.operadora = operadora;
}mostrarInfo(){
    console.log(`Informações do telefone: `,`\nMarca: ${this.marca}`,`\nModelo: ${this.modelo}`,`\nOperadora: ${this.operadora}`);
}
}