export default class Cliente {
    constructor(nombre, impuestos) {
        this._nombre = nombre;
        this._impuestos = impuestos;
        console.log("Cliente creado:", this._nombre);
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
        console.log("Nombre del cliente actualizado:", this._nombre);
    }

    calcularImpuesto() {
        let impuestoTotal = this._impuestos.montoBrutoAnual - this._impuestos.deducciones;
        console.log("Impuesto total calculado para", this._nombre + ":", impuestoTotal);
        return impuestoTotal;
    }
}
