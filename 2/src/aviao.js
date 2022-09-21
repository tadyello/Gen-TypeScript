"use strict";
exports.__esModule = true;
exports.Aviao = void 0;
var Aviao = /** @class */ (function () {
    function Aviao(cia, modelo, nivelCombustivel) {
        this.cia = cia;
        this.modelo = modelo;
        this.nivelCombustivel = nivelCombustivel;
    }
    Aviao.prototype.mostrarInfo = function () {
        console.log("Informa\u00E7\u00F5es do avi\u00E3o", "\nCompanhia a\u00E9rea: ".concat(this.cia), "\nModelo: ".concat(this.modelo), "\nN\u00EDvel de combust\u00EDvel: ".concat(this.nivelCombustivel));
    };
    Aviao.prototype.abastecer = function () {
        if (this.nivelCombustivel == "baixo") {
            console.log("O avi\u00E3o precisa ser abastecido imediatamente!");
        }
        else {
            console.log("O n\u00EDvel de combust\u00EDvel da aeronave est\u00E1 Ok.");
        }
    };
    return Aviao;
}());
exports.Aviao = Aviao;
