import Cl_vInscripcion from "./Cl_vInscripcion.js";
export default class Cl_vAcademia {
    _btInscribir;
    _vInscripcion;
    _lblIngresos;
    _lbldescuento;
    _lblingresosD;
    _lblPTotal;
    _lblPIngles;
    _lblPComp;
    _lblPIA;
    _lblPMenores;
    _lblPMayores;
    _lblPTercera;
    _contenedorReporte;
    constructor() {
        this._btInscribir = document.getElementById("btInscribir");
        this._lblIngresos = document.getElementById("lblIngresos");
        this._lbldescuento = document.getElementById("lbldescuento");
        this._lblingresosD = document.getElementById("lblingresosD");
        this._lblPTotal = document.getElementById("lblPTotal");
        this._lblPIngles = document.getElementById("lblPIngles");
        this._lblPComp = document.getElementById("lblPComp");
        this._lblPIA = document.getElementById("lblPIA");
        this._lblPMenores = document.getElementById("lblPMenores");
        this._lblPMayores = document.getElementById("lblPMayores");
        this._lblPTercera = document.getElementById("lblPTercera");
        this._contenedorReporte = document.getElementById("contenedorReporte");
        this._vInscripcion = new Cl_vInscripcion();
    }
    get btInscribir() { return this._btInscribir; }
    get vInscripcion() { return this._vInscripcion; }
    onInscribir(callback) {
        this.btInscribir.onclick = () => callback();
    }
    ocultarReporte() {
        if (this._contenedorReporte) {
            this._contenedorReporte.style.display = "none";
        }
    }
    MostrarReporte() {
        if (this._contenedorReporte) {
            this._contenedorReporte.style.display = "block";
        }
    }
    reportarInscripcion(datos) {
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
}
//# sourceMappingURL=Cl_vAcademia.js.map