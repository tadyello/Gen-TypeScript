/*ATIVIDADE 1
Crie uma um programa de saúde, nesse programa desenvolva uma Arrow functions que calcula o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.
*/

const imc = (peso: number, altura: number) => (peso / (altura ** 2)).toFixed(2)

console.log(imc(75, 1.75))
