/* ATIVIDADE 1
Crie uma um programa para trabalhar com estoque de uma loja, o programa deverá trabalhar com Collection do tipo Array de JavaScript para manipular os dados desse estoque, o programa deverá atender as seguintes funcionalidades:

Armazenar dados da Array
Remover dados da Array;
Atualizar dados da Array.
Apresentar todos os dados da Array.
*/

let estoque = ['Geladeira', 'Fogão', 'Celular', 'Cafeteira', 'Notebook']; // Armazenar dados da Array
console.log("\nEstoque inicial: ",estoque)
estoque.splice(4, 4) //Remover dados da Array
console.log("\nEstoque após remoção de um item : ",estoque)
estoque.push('Teclado', 'Videogame', 'Monitor'); // Atualizar dados da Array.
console.log("\nEstoque após adicionar 3 itens: ",estoque); //Apresentar todos os dados da Array.
