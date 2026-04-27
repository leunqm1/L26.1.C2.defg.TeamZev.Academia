import Cl_mAcademia from "../models/Cl_mAcademia.js";
import Cl_vAcademia from "../views/Cl_vAcademia.js";
export default class Cl_cInscripcion {
    private _modeloAcademia;
    private _vistaAcademia;
    constructor(modelo: Cl_mAcademia, vista: Cl_vAcademia);
    get modeloAcademia(): Cl_mAcademia;
    get vistaAcademia(): Cl_vAcademia;
    procesar(): void;
}
//# sourceMappingURL=Cl_cInscripcion.d.ts.map