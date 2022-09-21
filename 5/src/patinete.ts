export class patinete{
    cor : string;
    modelo :  string;
constructor(
    cor : string,
    modelo : string
)
{
    this.cor = cor;
    this.modelo = modelo;
    }
verDono(){
    if(this.cor =="amarelo"|| this.cor =="Amarelo"){
       console.log(`Este patinete pertence ao Marcelo.`);
    }
}
}


