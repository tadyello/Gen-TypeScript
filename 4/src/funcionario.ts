export class funcionario{
    nome : string;
    idade : number;
    matricula : number;
    setor : string;

constructor(
    nome : string,
    idade: number,
    matricula: number,
    setor: string
){
  this.nome = nome;
  this.idade = idade;
  this.matricula = matricula;
  this.setor = setor;  
}mostrarMat(){
    console.log(`Matrícula do funcionário:`,`\n${this.nome}`,`Matrícula: ${this.matricula}`);
}mostrarGrupo(){
    if(this.matricula >=5000){
        console.log(`\nO funcioário é do grupo 1.`);
    }else{
        console.log(`\nO funcioário é do grupo 2.`);
    }
}
}