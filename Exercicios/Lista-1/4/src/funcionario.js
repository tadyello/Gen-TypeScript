"use strict";
exports.__esModule = true;
exports.funcionario = void 0;
var funcionario = /** @class */ (function () {
    function funcionario(nome, idade, matricula, setor) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.setor = setor;
    }
    funcionario.prototype.mostrarMat = function () {
        console.log("Matr\u00EDcula do funcion\u00E1rio:", "\n".concat(this.nome), "Matr\u00EDcula: ".concat(this.matricula));
    };
    funcionario.prototype.mostrarGrupo = function () {
        if (this.matricula >= 5000) {
            console.log("\nO funcio\u00E1rio \u00E9 do grupo 1.");
        }
        else {
            console.log("\nO funcio\u00E1rio \u00E9 do grupo 2.");
        }
    };
    return funcionario;
}());
exports.funcionario = funcionario;
