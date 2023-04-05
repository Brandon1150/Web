'use strict'

/*Programa que nos pida dos números y qu enos diga cual es mayor,menor y si son iguales
Si los números no son un número o iguales a 0 que vuelva a pedir los datos
*/


var numero1 = parseInt(prompt("Dame el primer número", 0));
var numero2 = parseInt(prompt("Dame el segundo número", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN (numero1) || isNaN(numero2)){
    
 numero1 = parseInt(prompt("Dame el primer número", 0));
 numero2 = parseInt(prompt("Dame el segundo número", 0));

}

if (numero1 == numero2) {
    alert("Los números son iguales");
} else if (numero1 > numero2) {
    alert("El número mayor es:" + numero1);
    alert("El número menor es" + numero2);
} else if (numero2 = numero1) {
    alert("El número mayor es:" + numero1);
    alert("El número menor es" + numero2);
}else{
    alert("Datos invalidos");
}

