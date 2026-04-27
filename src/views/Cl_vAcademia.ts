import Cl_vInscripcion from "./Cl_vInscripcion.js";
import { IReporte } from "../interfaces/IReporte.js";

export default class Cl_vAcademia {
    private _btInscribir: HTMLButtonElement;
    private _vInscripcion: Cl_vInscripcion;
    private _lblIngresos: HTMLElement;
    private _lbldescuento: HTMLElement;
    private _lblingresosD: HTMLElement;
    private _lblPTotal: HTMLElement;
    private _lblPIngles: HTMLElement;
    private _lblPComp: HTMLElement;
    private _lblPIA: HTMLElement;
    private _lblPMenores: HTMLElement;
    private _lblPMayores: HTMLElement;
    private _lblPTercera: HTMLElement;
    private _contenedorReporte: HTMLElement;

    constructor() {
        this._btInscribir = <HTMLButtonElement>document.getElementById("btInscribir");
        
        // Inicializamos etiquetas de resultados
        this._lblIngresos = <HTMLElement>document.getElementById("lblIngresos");
        this._lbldescuento = <HTMLElement>document.getElementById("lbldescuento");
        this._lblingresosD = <HTMLElement>document.getElementById("lblingresosD");
        this._lblPTotal = <HTMLElement>document.getElementById("lblPTotal");
        this._lblPIngles = <HTMLElement>document.getElementById("lblPIngles");
        this._lblPComp = <HTMLElement>document.getElementById("lblPComp");
        this._lblPIA = <HTMLElement>document.getElementById("lblPIA");
        this._lblPMenores = <HTMLElement>document.getElementById("lblPMenores");
        this._lblPMayores = <HTMLElement>document.getElementById("lblPMayores");
        this._lblPTercera = <HTMLElement>document.getElementById("lblPTercera");
        this._contenedorReporte = <HTMLElement>document.getElementById("contenedorReporte");

        this._vInscripcion = new Cl_vInscripcion();
    }
    get btInscribir() { return this._btInscribir; }
    get vInscripcion() { return this._vInscripcion; }

    reportarInscripcion(datos: IReporte): void {
        this._lblIngresos.textContent = datos.ingresos.toFixed(2);
        this._lbldescuento.textContent = datos.descuentos.toFixed(2);
        this._lblingresosD.textContent = datos.ingresosD.toFixed(2);
         this._lblPTotal.textContent = datos.pTotal.toFixed(0);
        this._lblPIngles.textContent = datos.pIngles.toFixed(2) + "%";
        this._lblPComp.textContent = datos.pComp.toFixed(2) + "%";
        this._lblPIA.textContent = datos.pIA.toFixed(2) + "%";
        this._lblPMenores.textContent = datos.pMenores.toFixed(2) + "%";
        this._lblPMayores.textContent = datos.pMayores.toFixed(2) + "%";
        this._lblPTercera.textContent = datos.pTerceraEdad.toFixed(2) + "%";
        this.MostrarReporte();
    }

    onInscribir(callback: () => void): void {
        this.btInscribir.onclick = () => callback();
    }

    ocultarReporte(): void {
        if (this._contenedorReporte) {
        this._contenedorReporte.style.display = "none";
    }}
    MostrarReporte(): void {
        if (this._contenedorReporte) {
        this._contenedorReporte.style.display = "block";
    }}
}