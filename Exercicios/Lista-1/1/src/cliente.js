"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, sobrenome, email, telefone, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.telefone = telefone;
        this.idade = idade;
    }
    Cliente.prototype.verDados = function () {
        console.log("Nome do cliente: ".concat(this.nome, " ").concat(this.sobrenome), "\nE-mail: ".concat(this.email), "\nTelefone: ".concat(this.telefone), "\nIdade: ".concat(this.idade));
    };
    Cliente.prototype.oferecerSeguro = function () {
        if (this.idade > 0 && this.idade >= 65) {
            console.log("Oferecer seguro de vida para o cliente ".concat(this.nome));
        }
        else {
            console.log("Ofercer seguro residencial para o cliente ".concat(this.nome));
        }
    };
    return Cliente;
}());
exports.Cliente = Cliente;
