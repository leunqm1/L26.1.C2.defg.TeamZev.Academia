import Cl_mInscripcion from "../models/Cl_mInscripcion.js";
export default class Cl_cInscripcion {
    _modeloAcademia;
    _vistaAcademia;
    constructor(modelo, vista) {
        this._modeloAcademia = modelo;
        this._vistaAcademia = vista;
        this.vistaAcademia.onInscribir(() => {
            this.vistaAcademia.ocultarReporte();
            this.vistaAcademia.vInscripcion.mostrar();
        });
        this.vistaAcademia.vInscripcion.onAceptar(() => {
            this.procesar();
        });
        this.vistaAcademia.vInscripcion.onCancelar(() => {
            this.vistaAcademia.vInscripcion.ocultar();
            this.vistaAcademia.MostrarReporte();
        });
    }
    get modeloAcademia() { return this._modeloAcademia; }
    get vistaAcademia() { return this._vistaAcademia; }
    procesar() {
        const vIns = this.vistaAcademia.vInscripcion;
        const nuevaInscrip = new Cl_mInscripcion(vIns.nombre, vIns.apellido, vIns.cedula, vIns.sexo, vIns.fechaNacimiento, vIns.leerOpcion);
        this.modeloAcademia.procesarInscripcion(nuevaInscrip);
        this.vistaAcademia.reportarInscripcion({
            ingresos: this.modeloAcademia.acumInversion,
            descuentos: this.modeloAcademia.acumDescuento,
            ingresosD: this.modeloAcademia.acumIngresosD,
            pTotal: this.modeloAcademia.contEstudiantes,
            pIngles: this.modeloAcademia.porcIngles(),
            pComp: this.modeloAcademia.porcComputacion(),
            pIA: this.modeloAcademia.porcIA(),
            pMenores: this.modeloAcademia.porcMenorEdad(),
            pMayores: this.modeloAcademia.porcMayorEdad(),
            pTerceraEdad: this.modeloAcademia.porcTerceraEdad()
        });
        vIns.ocultar();
    }
}
//# sourceMappingURL=Cl_cInscripcion.js.map