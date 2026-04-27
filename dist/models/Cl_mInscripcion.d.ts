import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mInscripcion extends Cl_mPersona {
    private _leerOpcion;
    constructor(nombre: string, apellido: string, cedula: string, sexo: string, fechaNacimiento: Date, _leerOpcion: number);
    get leerOpcion(): number;
    inversionBase(): number;
    calculardescuento(): number;
    ingresosD(): number;
}
//# sourceMappingURL=Cl_mInscripcion.d.ts.map