export default class Cl_vInscripcion {
    _inNombre;
    _inApellido;
    _inCedula;
    _inSexo;
    _inFecha;
    _leerOpcion;
    _btAceptar;
    _btCancelar;
    _seccionFormulario;
    constructor() {
        this._inNombre = document.getElementById("inNombre");
        this._inApellido = document.getElementById("inApellido");
        this._inCedula = document.getElementById("inCedula");
        this._inSexo = document.getElementById("inSexo");
        this._inFecha = document.getElementById("inFecha");
        this._leerOpcion = document.getElementById("inLeerOpcion");
        this._btAceptar = document.getElementById("btAceptar");
        this._btCancelar = document.getElementById("btCancelar");
        this._seccionFormulario = document.getElementById("seccionFormulario");
        console.log("Formulario encontrado:", this._seccionFormulario);
    }
    get nombre() { return this._inNombre.value; }
    get apellido() { return this._inApellido.value; }
    get cedula() { return this._inCedula.value; }
    get sexo() { return this._inSexo.value; }
    get fechaNacimiento() { return new Date(this._inFecha.value); }
    get leerOpcion() { return Number(this._leerOpcion.value); }
    mostrar() {
        this._seccionFormulario.style.display = "block";
    }
    ocultar() {
        this._seccionFormulario.style.display = "none";
        this.limpiar();
    }
    limpiar() {
        this._inNombre.value = "";
        this._inApellido.value = "";
        this._inCedula.value = "";
        this._inFecha.value = "";
        this._leerOpcion.selectedIndex = 0;
    }
    onAceptar(callback) {
        this._btAceptar.onclick = () => callback();
    }
    onCancelar(callback) {
        this._btCancelar.onclick = () => callback();
    }
}
//# sourceMappingURL=Cl_vInscripcion.js.map