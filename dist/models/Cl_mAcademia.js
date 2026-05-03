export default class Cl_mAcademia {
    _contEstudiantes;
    _contIngles;
    _contComputacion;
    _contIA;
    _contMenorEdad;
    _contMayorEdad;
    _contTerceraEdad;
    _acumDescuento;
    _acumDescuentoIngles;
    _acumDescuentoComputacion;
    _acumDescuentoIA;
    _acumInversion;
    _acumIngresosD;
    constructor() {
        this._contEstudiantes = 0;
        this._contIngles = 0;
        this._contComputacion = 0;
        this._contIA = 0;
        this._contMenorEdad = 0;
        this._contMayorEdad = 0;
        this._contTerceraEdad = 0;
        this._acumDescuento = 0;
        this._acumDescuentoIngles = 0;
        this._acumDescuentoComputacion = 0;
        this._acumDescuentoIA = 0;
        this._acumInversion = 0;
        this._acumIngresosD = 0;
    }
    get contEstudiantes() {
        return this._contEstudiantes;
    }
    get acumDescuento() {
        return this._acumDescuento;
    }
    get acumInversion() {
        return this._acumInversion;
    }
    get acumIngresosD() {
        return this._acumIngresosD;
    }
    get _contestudiantes() {
        return this._contEstudiantes;
    }
    get acumDescuentoIngles() {
        return this._acumDescuentoIngles;
    }
    get acumDescuentoComputacion() {
        return this._acumDescuentoComputacion;
    }
    get acumDescuentoIA() {
        return this._acumDescuentoIA;
    }
    procesarInscripcion(ins) {
        this._contEstudiantes++;
        if (ins.leerOpcion === 1) {
            this._acumDescuentoIngles += ins.calcularDescuento();
            this._contIngles++;
        }
        if (ins.leerOpcion === 2) {
            this._contComputacion++;
            this._acumDescuentoComputacion += ins.calcularDescuento();
        }
        if (ins.leerOpcion === 3) {
            this._contIA++;
            this._acumDescuentoIA += ins.calcularDescuento();
        }
        if (ins.edad < 18)
            this._contMenorEdad++;
        else if ((ins.edad >= 18 && ins.edad <= 50 && ins.sexo === "F") || (ins.edad >= 18 && ins.edad <= 60 && ins.sexo === "M"))
            this._contMayorEdad++;
        else if ((ins.edad > 50 && ins.sexo === "F") || (ins.edad > 60 && ins.sexo === "M"))
            this._contTerceraEdad++;
        this._acumDescuento += ins.calcularDescuento();
        this._acumInversion += ins.inversionBase();
        this._acumIngresosD += ins.ingresosD();
    }
    porcIngles() {
        if (this._contEstudiantes > 0)
            return (this._contIngles / this._contEstudiantes) * 100;
        return 0;
    }
    porcComputacion() {
        if (this._contEstudiantes > 0)
            return (this._contComputacion / this._contEstudiantes) * 100;
        return 0;
    }
    porcIA() {
        if (this._contEstudiantes > 0)
            return (this._contIA / this._contEstudiantes) * 100;
        return 0;
    }
    porcMenorEdad() {
        if (this._contEstudiantes > 0)
            return (this._contMenorEdad / this._contEstudiantes) * 100;
        return 0;
    }
    porcMayorEdad() {
        if (this._contEstudiantes > 0)
            return (this._contMayorEdad / this._contEstudiantes) * 100;
        return 0;
    }
    porcTerceraEdad() {
        if (this._contEstudiantes > 0)
            return (this._contTerceraEdad / this._contEstudiantes) * 100;
        return 0;
    }
}
//# sourceMappingURL=Cl_mAcademia.js.map