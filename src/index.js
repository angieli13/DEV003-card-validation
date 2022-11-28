import validator from './validator.js';

console.log(validator);
function inicio() {
    alert('empezo el programa');
}

function validar() {
    var texto_nuevo = document.getElementById('texto');
    var valores_tarjeta = texto_nuevo.value;
    console.log(valores_tarjeta.length);
    var texto = [];
    if(valores_tarjeta.length == 16){
        console.log('yytytytdtCorrecto');
        for (i=0; i < 16; i++){
            console.log(valores_tarjeta[i] + " " + valores_tarjeta[i] * 2);
        }
    } else {
        console.log('error');
    }
    alert('finalizo el programa' +  texto_nuevo.value);
}