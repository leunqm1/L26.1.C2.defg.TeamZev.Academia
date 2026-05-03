import Cl_mInscripcion from "../models/Cl_mInscripcion.js";
import Cl_vInscripcion from "../views/Cl_vInscripcion.js";
import Cl_mAcademia from "../models/Cl_mAcademia.js";
import Cl_vAcademia from "../views/Cl_vAcademia.js";

export default class Cl_cInscripcion {
    private _modeloAcademia: Cl_mAcademia;
    private _vistaAcademia: Cl_vAcademia;

    constructor(modelo: Cl_mAcademia, vista: Cl_vAcademia) {
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
            this.vistaAcademia.mostrarReporte();
        });
       
    }

    
    get modeloAcademia() { return this._modeloAcademia; }
    get vistaAcademia() { return this._vistaAcademia; }

    procesar(): void {
        
        const vIns = this.vistaAcademia.vInscripcion;

        const nuevaInscrip = new Cl_mInscripcion(
            vIns.nombre,           
            vIns.apellido,        
            vIns.cedula,            
            vIns.sexo,             
            vIns.fechaNacimiento, 
            vIns.leerOpcion        
        );

        
        this.modeloAcademia.procesarInscripcion(nuevaInscrip);

        this.vistaAcademia.reportarInscripcion({
            ingresos: this.modeloAcademia.acumInversion,
            descuentos: this.modeloAcademia.acumDescuento,
            descuentoIngles: this.modeloAcademia.acumDescuentoIngles,
            descuentoComputacion: this.modeloAcademia.acumDescuentoComputacion,
            descuentoIA: this.modeloAcademia.acumDescuentoIA,
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