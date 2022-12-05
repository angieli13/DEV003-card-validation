const validator = {
    
  isValid: function(cardNumber) {
    console.log("boton funciona");
    if (cardNumber.length >= 15){
      
      const array = []; // Se crea un array vacío en donde se acomodarán los números de la tarjeta.

      for(let i = cardNumber.length -1; i >= 0; i--){
        array.push(parseInt(cardNumber[i]));
      }
      
      let sumanumero = 0;

      for(let p = 0; p <= array.length-1; p++){ // Se itera en los números de las posiciones pares.
        if ((p%2) === 0) {
          const mult = array[p] * 2; // Se multiplican por 2 los números de las posiciones pares.
    
          if (mult > 9){ // Si el resultado de la multiplicación tiene 2 dígitos, se deben sumar esos dígitos.
            sumanumero = sumanumero + (Number(mult.toString().charAt(0)) + Number(mult.toString().charAt(1)));
          }else{
            sumanumero += mult; // Se suman todos los números de las posiciones pares.
          }
        } else {
          sumanumero += array[p];
        }            
      }

      //console.log({array, sumanumero});
      //tarjeta valida 
      if(sumanumero.toString().charAt(1)===0){
        //console.log("ok", sumanumero);
        //alert("tarjeta valida");
        return true;
      } else {
        //console.log("error",sumanumero);
        //alert("tarjeta no valida");
        return false;
      }
    } else {
      return false;
    }
 },

  maskify: function(cardNumber){

    let newstring = "";

    for (let i = 0; i <= cardNumber.length - 1; i++){
      if (i < (cardNumber.length - 4)){
        newstring = newstring + "#";
      } else {
        newstring = newstring + cardNumber[i];
      }
    }
   
    return newstring;
  }
  


}
    


export default validator;

