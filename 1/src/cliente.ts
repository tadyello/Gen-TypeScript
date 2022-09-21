export class Cliente {
    nome: string;
    sobrenome: string;
    email: string;
    telefone: string;
    idade: number;

    constructor(
        nome: string,
        sobrenome: string,
        email: string,
        telefone: string,
        idade: number
    ){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.telefone = telefone;
    this.idade = idade;
}
verDados(){
    console.log(`Nome do cliente: ${this.nome} ${this.sobrenome}`,`\nE-mail: ${this.email}`,`\nTelefone: ${this.telefone}`,`\nIdade: ${this.idade}`);
}
oferecerSeguro(){
    if(this.idade > 0 && this.idade >= 65){
        console.log(`Oferecer seguro de vida para o cliente ${this.nome}`);
    }else{
        console.log(`Ofercer seguro residencial para o cliente ${this.nome}`);
    }
}

}
