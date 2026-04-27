import Cl_mAcademia from "../models/Cl_mAcademia.js";
import Cl_vAcademia from "../views/Cl_vAcademia.js";
import Cl_cInscripcion from "./Cl_cInscripcion.js";
export default class Cl_cAcademia {
    _modelo;
    _vista;
    _controladorInscripcion;
    constructor() {
        // 1. Inicializamos los pilares del sistema
        this._modelo = new Cl_mAcademia();
        this._vista = new Cl_vAcademia();
        // 2. Conectamos con el controlador pequeño pasándole las referencias
        // Usamos los getters para cumplir la regla del profesor
        this._controladorInscripcion = new Cl_cInscripcion(this.modelo, this.vista);
    }
    get modelo() {
        return this._modelo;
    }
    get vista() {
        return this._vista;
    }
}
const app = new Cl_cAcademia();
//# sourceMappingURL=Cl_cAcademia.js.map