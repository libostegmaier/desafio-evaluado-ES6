export default class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
        console.log("Impuestos creados:", this._montoBrutoAnual, this._deducciones);
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(monto) {
        this._montoBrutoAnual = monto;
        console.log("Monto bruto anual actualizado:", this._montoBrutoAnual);
    }

    get deducciones() {
        return this._deducciones;
    }

    set deducciones(deducciones) {
        this._deducciones = deducciones;
        console.log("Deducciones actualizadas:", this._deducciones);
    }
}
