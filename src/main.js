import Cliente from './Cliente.js';
import Impuestos from './Impuestos.js';

// Crear instancias de Cliente e Impuestos
let impuestosCliente1 = new Impuestos(50000, 10000);
let cliente1 = new Cliente("John Doe", impuestosCliente1);

// Calcular impuestos del cliente
let impuestosCalculados = cliente1.calcularImpuesto();
console.log(`Impuestos calculados para ${cliente1.nombre}: ${impuestosCalculados}`);
