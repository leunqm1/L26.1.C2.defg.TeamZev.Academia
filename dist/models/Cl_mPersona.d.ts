export default class Cl_mPersona {
    protected _nombre: string;
    protected _apellido: string;
    protected _cedula: string;
    protected _sexo: string;
    protected _fechaNacimiento: Date;
    constructor(nombre: string, apellido: string, cedula: string, sexo: string, fechaNacimiento: Date);
    get edad(): number;
    set nombre(nombre: string);
    get nombre(): string;
    set apellido(apellido: string);
    get apellido(): string;
    set cedula(cedula: string);
    get cedula(): string;
    set sexo(sexo: string);
    get sexo(): string;
}
//# sourceMappingURL=Cl_mPersona.d.ts.map