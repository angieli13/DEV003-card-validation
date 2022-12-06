import validator from './validator.js';

const queryString = window.location.search.substring(0);
const urlParams = new URLSearchParams(queryString);

//const numerosTarjeta = textin.value   
document.getElementById("boton").addEventListener("click", function(){
    const numerosTarjeta = document.getElementById('texton').value; 
    console.log(numerosTarjeta);
    if ( validator.isValid(numerosTarjeta)==true){
        alert ("tarjeta valida")
        document.getElementById('texton').value = validator.maskify(numerosTarjeta);
    } else {
        alert ("tarjeta invalida")
    }
 });

//EventTargetinterfaz configura una función que se llamará cada vez que el evento especificado se envíe al destino.
 //validator.isValid(textin)

 