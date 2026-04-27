export default class Cl_vInscripcion {
    private _inNombre;
    private _inApellido;
    private _inCedula;
    private _inSexo;
    private _inFecha;
    private _leerOpcion;
    private _btAceptar;
    private _btCancelar;
    private _seccionFormulario;
    constructor();
    get nombre(): string;
    get apellido(): string;
    get cedula(): string;
    get sexo(): string;
    get fechaNacimiento(): Date;
    get leerOpcion(): number;
    mostrar(): void;
    ocultar(): void;
    limpiar(): void;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}
//# sourceMappingURL=Cl_vInscripcion.d.ts.map