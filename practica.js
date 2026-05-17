
//funcion declarada de tipo de procedimiento 
function imprimir(nombre){
    console.log(nombre);
}
imprimir("Juan");

function imprimir(parametro){
    console.log(parametro);
}
imprimir("100");

//funcion declarada de tipo de funcion
function sumar(a,b){
    let resultado = a+b;
    return resultado;
}
let a=2, b=3, c;
c = sumar(a,b);
console.log(c);


let cadena = "Hola Mundo";
let resultado = cadena.length;
console.log(resultado);


let cantante = "Shakira";
for (let i=0; i<cantante.length; i++){
    console.log(cantante[i]);
}
    

let c= '10';
let d = '20';
console.log(c + d); //devuelve 1020 

// para convertir a numero entero se utiliza parseInt() o Number()
let suma = parseInt(c) + parseInt(d);
console.log(suma); //devuelve 30


let c=10, d=20;
console.log(c + d); //devuelve 30
let concatenacion = c.toString() + d.toString();
console.log(concatenacion); //devuelve 1020

