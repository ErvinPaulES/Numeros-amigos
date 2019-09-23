class Salida{
    constructor(camion, base, horaInicio, horaFin){
        this._camion = camion;
        this._base = base;
        this._horaInicio = horaInicio;
        this._horaFin = horaFin;
        this._secuencia = [];
    }
    get camion(){
        return this._camion;
    }
    get base(){
        return this._base;
    }
    get horaInicio(){
        return this._horaInicio;
    }
    get horaFin(){
        return this._horaFin;
    }
    get secuencia(){
        return this._secuencia;
    }
    set camion(camion){
        this._camion = camion;
    }
    set base(base){
        this._base = base;
    }
    set horaInicio(horaInicio){
        this._horaInicio = horaInicio;
    }
    set horaFin(horaFin){
        this._horaFin = horaFin;
    }
    set secuencia(base){
        this._secuencia.push(base);
    }
}