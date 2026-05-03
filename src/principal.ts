import Cl_cInscripcion from "./controllers/Cl_cInscripcion.js";
import Cl_mAcademia from "./models/Cl_mAcademia.js";
import Cl_mInscripcion from "./models/Cl_mInscripcion.js";
import Cl_vAcademia from "./views/Cl_vAcademia.js";
import Cl_vInscripcion from "./views/Cl_vInscripcion.js";

const mAcademia = new Cl_mAcademia();

const vAcademia = new Cl_vAcademia();
const vInscripcion = new Cl_vInscripcion();

const cInscripcion = new Cl_cInscripcion(mAcademia, vAcademia);

const estudiante1 = new Cl_mInscripcion("Ana", "Gil", "8888", "F", new Date(2011, 5, 15), 2); 
const estudiante2 = new Cl_mInscripcion("Ana", "Gil", "8888", "F", new Date(1999, 6, 25), 2);
const estudiante3 = new Cl_mInscripcion("Ana", "Gil", "8888", "M", new Date(1980, 8, 20), 3);
const estudiante4 = new Cl_mInscripcion("Ana", "Gil", "8888", "F", new Date(1970, 4, 14),2);
const estudiante5 = new Cl_mInscripcion("Ana", "Gil", "8888", "F", new Date(2015, 0, 3), 1);
const estudiante6 = new Cl_mInscripcion("Ana", "Gil", "8888", "M", new Date(1995, 9, 11), 2);
const estudiante7 = new Cl_mInscripcion("Ana", "Gil", "8888", "M", new Date(1999, 7, 7), 3);
const estudiante8 = new Cl_mInscripcion("Ana", "Gil", "8888", "F", new Date(1966, 6, 19), 1);

mAcademia.procesarInscripcion(estudiante1)
mAcademia.procesarInscripcion(estudiante2)
mAcademia.procesarInscripcion(estudiante3)
mAcademia.procesarInscripcion(estudiante4)
mAcademia.procesarInscripcion(estudiante5)
mAcademia.procesarInscripcion(estudiante6)
mAcademia.procesarInscripcion(estudiante7)
mAcademia.procesarInscripcion(estudiante8)

vAcademia.reportarInscripcion({
    ingresos: mAcademia.acumInversion,
    descuentos: mAcademia.acumDescuento,
    descuentoIngles: mAcademia.acumDescuentoIngles,
    descuentoComputacion: mAcademia.acumDescuentoComputacion,
    descuentoIA: mAcademia.acumDescuentoIA,
    ingresosD: mAcademia.acumIngresosD,
    pIngles: mAcademia.porcIngles(),
    pComp: mAcademia.porcComputacion(),
    pIA: mAcademia.porcIA(),
    pTotal: mAcademia._contestudiantes,
    pMenores: mAcademia.porcMenorEdad(),
    pMayores: mAcademia.porcMayorEdad(),
    pTerceraEdad: mAcademia.porcTerceraEdad()
});