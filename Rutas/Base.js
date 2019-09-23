class Base{
    constructor(nombre, tiempo, longitud, latitud){
        this._nombre = nombre;
        this._tiempo = tiempo;
        this._longitud = longitud;
        this._latitud = latitud;
    }
    get nombre(){
        return this._nombre;
    }
    get tiempo(){
        return this._tiempo;
    }
    get longitud(){
        return this._longitud;
    }
    get latitud(){
        return this._latitud;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set tiempo(tiempo){
        this._tiempo = tiempo;
    }
    set longitud(longitud){
        this._longitud = longitud;
    }
    set latitud(latitud){
        this._latitud = latitud;
    }
}