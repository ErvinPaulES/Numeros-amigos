class Chofer{
    constructor(nombre, edad, camion){
        this._nombre = nombre;
        this._edad = edad;
        this._camion = camion;
    }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    get camion(){
        return this._camion;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set edad(edad){
        this._edad = edad;
    }
    set camion(camion){
        this._camion = camion;
    }
}