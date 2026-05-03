import type Cl_mInscripcion from "./Cl_mInscripcion.js";
export default class Cl_mAcademia {
    private _contEstudiantes;
    private _contIngles;
    private _contComputacion;
    private _contIA;
    private _contMenorEdad;
    private _contMayorEdad;
    private _contTerceraEdad;
    private _acumDescuento;
    private _acumInversion;
    private _acumIngresosD;
    constructor();
    get contEstudiantes(): number;
    get acumDescuento(): number;
    get acumInversion(): number;
    get acumIngresosD(): number;
    get _contestudiantes(): number;
    procesarInscripcion(ins: Cl_mInscripcion): void;
    porcIngles(): number;
    porcComputacion(): number;
    porcIA(): number;
    porcMenorEdad(): number;
    porcMayorEdad(): number;
    porcTerceraEdad(): number;
}
//# sourceMappingURL=Cl_mAcademia.d.ts.map