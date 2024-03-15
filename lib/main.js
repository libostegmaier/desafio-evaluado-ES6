"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Crear instancias de Cliente e Impuestos
var impuestosCliente1 = new _Impuestos["default"](50000, 10000);
var cliente1 = new _Cliente["default"]("John Doe", impuestosCliente1);

// Calcular impuestos del cliente
var impuestosCalculados = cliente1.calcularImpuesto();
console.log("Impuestos calculados para ".concat(cliente1.nombre, ": ").concat(impuestosCalculados));