import type Cl_mInscripcion from "./Cl_mInscripcion.js";

export default class Cl_mAcademia{
    private _contEstudiantes: number;
    private _contIngles: number;
    private _contComputacion: number;
    private _contIA: number;
    private _contMenorEdad: number;
    private _contMayorEdad: number;
    private _contTerceraEdad: number;
    private _acumDescuento: number;
    private _acumInversion: number;
    private _acumIngresosD: number;

    constructor(){
        this._contEstudiantes = 0;
        this._contIngles = 0;
        this._contComputacion = 0;
        this._contIA = 0;
        this._contMenorEdad = 0;
        this._contMayorEdad = 0;
        this._contTerceraEdad = 0;
        this._acumDescuento = 0;
        this._acumInversion = 0;
        this._acumIngresosD = 0;
    }

    get contEstudiantes(): number{
        return this._contEstudiantes;
    }
    get contIngles(): number{
        return this._contIngles;
    }
    get contComputacion(): number{
        return this._contComputacion;
    }
    get contIA(): number{
        return this._contIA;
    }
    get contMenorEdad(): number{
        return this._contMenorEdad;
    }
    get contMayorEdad(): number{
        return this._contMayorEdad;
    }
    get contTerceraEdad(): number{
        return this._contTerceraEdad;
    }
    get acumDescuento(): number{
        return this._acumDescuento;
    }
    get acumInversion(): number{
        return this._acumInversion;
    }
    get acumIngresosD(): number{
        return this._acumIngresosD;
    }
    procesarInscripcion(ins: Cl_mInscripcion): void{
        this._contEstudiantes++;
        if (ins.leerOpcion === 1)
            this._contIngles++;
        else if (ins.leerOpcion === 2)
            this._contComputacion++;
        else if (ins.leerOpcion === 3)
            this._contIA++;
        if (ins.edad < 18)
            this._contMenorEdad++;
        else if ((ins.edad >= 50 && ins.sexo === "F") || (ins.edad >= 60 && ins.sexo === "M"))
            this._contTerceraEdad++;
        this._acumDescuento += ins.calculardescuento();
        this._acumInversion += ins.inversionBase();
        this._acumIngresosD += ins.ingresosD();
        
    }

    porcIngles(): number{
        if (this._contEstudiantes > 0)
            return (this._contIngles / this._contEstudiantes) * 100;
        return 0;
    }
    porcComputacion(): number{
        if (this._contEstudiantes > 0)
            return (this._contComputacion / this._contEstudiantes) * 100;
        return 0;
    }

    porcIA(): number{
        if (this._contEstudiantes > 0)
            return (this._contIA / this._contEstudiantes) * 100;
        return 0;
    }
    porcMenorEdad(): number{
        if (this._contEstudiantes > 0)
            return (this._contMenorEdad / this._contEstudiantes) * 100;
        return 0;
    }
    porcMayorEdad(): number{
        if (this._contEstudiantes > 0)
            return (this._contMayorEdad / this._contEstudiantes) * 100;
        return 0;}
    porcTerceraEdad(): number{
        if (this._contEstudiantes > 0)
            return (this._contTerceraEdad / this._contEstudiantes) * 100;
        return 0;
}
}