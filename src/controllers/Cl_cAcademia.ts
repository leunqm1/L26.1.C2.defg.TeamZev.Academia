import Cl_mAcademia from "../models/Cl_mAcademia.js";
import Cl_vAcademia from "../views/Cl_vAcademia.js";
import Cl_cInscripcion from "./Cl_cInscripcion.js";

export default class Cl_cAcademia {
    private _modelo: Cl_mAcademia;
    private _vista: Cl_vAcademia;
    private _controladorInscripcion: Cl_cInscripcion;

    constructor() {
        this._modelo = new Cl_mAcademia();
        this._vista = new Cl_vAcademia();
        this._controladorInscripcion = new Cl_cInscripcion(this.modelo, this.vista);
    }
    get modelo(): Cl_mAcademia {
        return this._modelo;
    }

    get vista(): Cl_vAcademia {
        return this._vista;
    }
}
const app = new Cl_cAcademia();