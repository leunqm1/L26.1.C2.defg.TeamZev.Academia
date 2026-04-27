export default class Cl_mPersona{
    protected _nombre: string;
    protected _apellido: string;
    protected _cedula: string;
    protected _sexo: string;
    protected _fechaNacimiento: Date;

    constructor(nombre: string, apellido: string, cedula: string, sexo: string, fechaNacimiento: Date){
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._sexo = sexo;
        this._fechaNacimiento = new Date(fechaNacimiento);
    }
    get edad(): number{
        const hoy = new Date();
        let edad = hoy.getFullYear() - this._fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this._fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this._fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
    set nombre(nombre: string){
        this._nombre = nombre;
    }
    get nombre(): string{
        return this._nombre;
    }
    set apellido(apellido: string){
        this._apellido = apellido;
    }
    get apellido(): string{
        return this._apellido;
    }
    set cedula(cedula: string){
        this._cedula = cedula;
    }       
    get cedula(): string{
        return this._cedula;
    }
    set sexo(sexo: string){
        this._sexo = sexo;
    }
    get sexo(): string{
        return this._sexo;
    }
}