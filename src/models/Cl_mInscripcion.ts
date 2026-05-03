import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mInscripcion extends Cl_mPersona{
    private _leerOpcion: number;

    constructor(nombre: string, apellido: string, cedula: string, sexo: string, fechaNacimiento: Date, _leerOpcion: number){
        super ( nombre, apellido, cedula, sexo, fechaNacimiento);
        this._leerOpcion = _leerOpcion;

    }

    get leerOpcion(): number{
        return this._leerOpcion;}

    inversionBase(): number{
        let inversion: number = 0;
        if (this.leerOpcion === 1){
            inversion = 20;
        } else if (this.leerOpcion === 2){
            inversion = 25;
        } else if (this.leerOpcion === 3){
             inversion = 30;  }
                return inversion;}
    
    calcularDescuento(): number {
        let porcentaje = 0;
        if (this.edad < 18) {
            porcentaje = 0.20;
        } else if ((this.edad > 50 && this.sexo === "F") || (this.edad > 60 && this.sexo === "M")) {
            porcentaje = 0.40;
        }
        return this.inversionBase() * porcentaje;
    }

    ingresosD(): number{
        return this.inversionBase() - this.calcularDescuento();
    }
    
}