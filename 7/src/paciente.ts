export class paciente{
    nome : string;
    idade : number;
    
constructor(
    nome : string,
    idade : number
){
    this.nome = nome;
    this.idade = idade;
}
alaHospitalar()
{
    if(this.idade<=14){
        console.log(`O paciente ${this.nome} deve ser direcionado para ala infantil.`);
    }
}
}
