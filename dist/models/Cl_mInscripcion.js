import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mInscripcion extends Cl_mPersona {
    _leerOpcion;
    constructor(nombre, apellido, cedula, sexo, fechaNacimiento, _leerOpcion) {
        super(nombre, apellido, cedula, sexo, fechaNacimiento);
        this._leerOpcion = _leerOpcion;
    }
    get leerOpcion() {
        return this._leerOpcion;
    }
    inversionBase() {
        let inversion = 0;
        if (this.leerOpcion === 1) {
            inversion = 20;
        }
        else if (this.leerOpcion === 2) {
            inversion = 25;
        }
        else if (this.leerOpcion === 3) {
            inversion = 30;
        }
        return inversion;
    }
    calculardescuento() {
        let porcentaje = 0;
        if (this.edad < 18) {
            porcentaje = 0.20;
        }
        else if ((this.edad >= 50 && this.sexo === "F") || (this.edad >= 60 && this.sexo === "M")) {
            porcentaje = 0.40;
        }
        return this.inversionBase() * porcentaje;
    }
    ingresosD() {
        return this.inversionBase() - this.calculardescuento();
    }
}
//# sourceMappingURL=Cl_mInscripcion.js.map