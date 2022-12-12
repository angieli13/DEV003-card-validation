import validator from './validator.js';



//const numerosTarjeta = textin.value
//El método addEventlistener, es un escuchador que indica al navegador que este atento a la interacción del usuario.   
document.getElementById("boton").addEventListener("click", function(){
  const numerosTarjeta = document.getElementById('texton').value; 
  console.log(numerosTarjeta);
  if (validator.isValid(numerosTarjeta)===true){
    alert ("tarjeta valida");
    document.getElementById('texton').value = validator.maskify(numerosTarjeta);
    let divgracias = document.getElementById('grupono');
    let gracias = document.getElementById('idgracias');
    divgracias.style.display = "none";
    gracias.style.display = "block";
  } else {
    alert ("tarjeta invalida")
  }
  });



//EventTargetinterfaz configura una función que se llamará cada vez que el evento especificado se envíe al destino.
//validator.isValid(textin)

