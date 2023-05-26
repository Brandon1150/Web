type alfanumerico = string | number;

let personalizado: alfanumerico = "Brandon Arturo Angeles ";


//string
let cadena: string | number = "Brandon Arturo Angeles ";

cadena =12 ;

//number
let numero :number =12;

//Booleano
let verdader_falso: boolean = true;

//Any
let cualquiera: any = "Hola"

//Arrays
var lenguajes: Array<string> = ["PHP","JS","CSS"];

let years: number[]=[12,12];


//Let vs Var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 1){
    let numero1 = 44;
    var numero2 =55;


    console.log(numero1,numero2);

}

console.log(numero1,numero2);

console.log(cadena,numero,verdader_falso,lenguajes,years);