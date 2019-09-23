class Camion{
    constructor(nombre, tiempo, chofer, salida){
        this._nombre = nombre;
        this._tiempo = tiempo;
        this._chofer = chofer;
        this._salida = salida;
        this._bases = [];
    }
    get nombre(){
        return this._nombre;
    }
    get tiempo(){
        return this._tiempo;
    }
    get chofer(){
        return this._chofer;
    }
    get salida(){
        return this._salida;
    }
    get base(){
        return this._bases;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set tiempo(tiempo){
        this._tiempo = tiempo;
    }
    set chofer(chofer){
        this._chofer = chofer;
    }
    set salida(salida){
        this._salida = salida;
    }
    set base(base){
        if(this._bases.length <=5) this._bases.push(base);
    }
}