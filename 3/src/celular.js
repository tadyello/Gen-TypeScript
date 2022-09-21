"use strict";
exports.__esModule = true;
exports.celular = void 0;
var celular = /** @class */ (function () {
    function celular(marca, modelo, operadora) {
        this.marca = marca;
        this.modelo = modelo;
        this.operadora = operadora;
    }
    celular.prototype.mostrarInfo = function () {
        console.log("Informa\u00E7\u00F5es do telefone: ", "\nMarca: ".concat(this.marca), "\nModelo: ".concat(this.modelo), "\nOperadora: ".concat(this.operadora));
    };
    return celular;
}());
exports.celular = celular;
