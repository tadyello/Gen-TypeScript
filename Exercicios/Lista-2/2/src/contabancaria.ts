export class contabancaria{
    titular: string;
    agencia: string;
    conta : string;
    saldoMensal : number;
constructor(
    titular: string,
    agencia: string,
    conta : string,
    saldoMensal : number
){
    this.titular = titular
    this.agencia = agencia;
    this.conta = conta;
    this.saldoMensal = saldoMensal;
}verDados(){
    console.log(`Titular: ${this.titular}`,`Agência: ${this.agencia}`,`Conta: ${this.conta}`,`Saldo Mensal: R$${this.saldoMensal}`);
}oferecerCartao(){
    if(this.saldoMensal >= 1500 && this.saldoMensal<= 2499){
        console.log(`Oferecer cartão nacional.`);
    }else if(this.saldoMensal >= 2500 && this.saldoMensal<=4999){
        console.log(`Oferecer cartão Gold Internacional.`);
    }else if(this.saldoMensal>= 5000){
        console.log(`Oferecer cartão Black Internacional.`);
    }
}
}