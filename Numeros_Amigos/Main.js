var btnIniciar = document.querySelector('#Evaluar');
btnIniciar.addEventListener('click', Evaluar)
var Resultado = document.querySelector('#resultado');

function Evaluar(){
   let Numero = Number(document.querySelector('#numero').value);

    for(let i=1; i<Numero; i++){
     let amigo1 = Divisores(i);
     let amigo2 = Divisores(amigo1);
        if(amigo2 == i && i != amigo1){
            Resultado.innerHTML+= i + ', ' + amigo1 + '<br>';
        }
    }
}

function Divisores(numero){
    let sumaDivisores = 0;
    for(let i=1; i<numero; i++){
        if(numero%i == 0){
            sumaDivisores+= i;
        }
    }
    return sumaDivisores;
}