import Cl_vInscripcion from "./Cl_vInscripcion.js";
import { IReporte } from "../interfaces/IReporte.js";
export default class Cl_vAcademia {
    private _btInscribir;
    private _vInscripcion;
    private _lblIngresos;
    private _lbldescuento;
    private _lblingresosD;
    private _lblPTotal;
    private _lblPIngles;
    private _lblPComp;
    private _lblPIA;
    private _lblPMenores;
    private _lblPMayores;
    private _lblPTercera;
    private _contenedorReporte;
    constructor();
    get btInscribir(): HTMLButtonElement;
    get vInscripcion(): Cl_vInscripcion;
    onInscribir(callback: () => void): void;
    ocultarReporte(): void;
    mostrarReporte(): void;
    reportarInscripcion(datos: IReporte): void;
}
//# sourceMappingURL=Cl_vAcademia.d.ts.map