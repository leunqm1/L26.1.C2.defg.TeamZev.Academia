export default class Cl_vInscripcion {
    private _inNombre: HTMLInputElement;
    private _inApellido: HTMLInputElement;
    private _inCedula: HTMLInputElement;
    private _inSexo: HTMLSelectElement;
    private _inFecha: HTMLInputElement;
    private _leerOpcion: HTMLSelectElement;
    private _btAceptar: HTMLButtonElement;
    private _btCancelar: HTMLButtonElement;
    private _seccionFormulario: HTMLElement;

    constructor() {
        this._inNombre = <HTMLInputElement>document.getElementById("inNombre");
        this._inApellido = <HTMLInputElement>document.getElementById("inApellido");
        this._inCedula = <HTMLInputElement>document.getElementById("inCedula");
        this._inSexo = <HTMLSelectElement>document.getElementById("inSexo");
        this._inFecha = <HTMLInputElement>document.getElementById("inFecha");
        this._leerOpcion = <HTMLSelectElement>document.getElementById("inLeerOpcion");
        this._btAceptar = <HTMLButtonElement>document.getElementById("btAceptar");
        this._btCancelar = <HTMLButtonElement>document.getElementById("btCancelar");
        this._seccionFormulario = <HTMLElement>document.getElementById("seccionFormulario");
        console.log("Formulario encontrado:", this._seccionFormulario);
    }

    get nombre(): string { return this._inNombre.value; }
    get apellido(): string { return this._inApellido.value; }
    get cedula(): string { return this._inCedula.value; }
    get sexo(): string { return this._inSexo.value; }
    get fechaNacimiento(): Date { return new Date(this._inFecha.value); }
    get leerOpcion(): number { return Number(this._leerOpcion.value); }

    mostrar(): void {
        this._seccionFormulario.style.display = "block";
    }

    ocultar(): void {
        this._seccionFormulario.style.display = "none";
        this.limpiar();
    }

    limpiar(): void {
        this._inNombre.value = "";
        this._inApellido.value = "";
        this._inCedula.value = "";
        this._inFecha.value = "";
        this._leerOpcion.selectedIndex = 0;
    }

    onAceptar(callback: () => void): void {
        this._btAceptar.onclick = () => callback();
    }

    onCancelar(callback: () => void): void {
        this._btCancelar.onclick = () => callback();
    }
}