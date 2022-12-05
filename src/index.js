import validator from './validator.js';

const queryString = window.location.search.substring(0);
const urlParams = new URLSearchParams(queryString);

const textin = document.getElementById('texton').value;
alert("1 ",queryString);
alert("2 ",urlParams.get('texton'));
document.getElementById("boton").addEventListener("click", validator.isValid(textin));
//EventTargetinterfaz configura una función que se llamará cada vez que el evento especificado se envíe al destino.
 