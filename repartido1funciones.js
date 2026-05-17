//ejercico 1
console.log("Ejercicio 1");
function sumar(a,b){
    let resultado = a+b;
    return resultado;
}
function resta(a,b){
    let resultado = a-b;
    return resultado;
}
function multiplicacion(a,b){
    let resultado = a*b;
    return resultado;
}
function division(a,b){
    let resultado = a/b;
    return resultado;
}
 
function valorAbsoluto(numeros){
    return Math.abs(numeros);
}


function redondeo(numeros){
    return Math.round(numeros);
}

function truncado(numeros){
    return Math.trunc(numeros);
}

console.log("calculadora de funciones");
console.log(sumar(2,3));
console.log(resta(5,2));
console.log(multiplicacion(4,3));
console.log(division(10,2));
console.log(valorAbsoluto(-10));    
console.log(redondeo(3.6));    
console.log(truncado(3.6));   



//ejercicio 2
console.log("Ejercicio 2");
//cantidad de caracteres de una cadena de texto
let texto = "Tropical House";
let resultado = texto.length;
console.log(resultado);

//imprimir cada caracter de una cadena de texto
{console.log(texto[0]);
}


{console.log(texto[13]);
}

//recorrer una cadena de texto 
for (let i=0; i<texto.length; i++){
    console.log(texto[i]);
}

//obtener distintas subcadenas utilizando substring()
let subcadena1 = texto.substring(0, 8);
console.log(subcadena1); //devuelve "Tropical"

let subcadena2 = texto.substring(9, 14);
console.log(subcadena2); //devuelve "House"

//convertir a mayusculas y minusculas
let mayusculas = texto.toUpperCase();
console.log(mayusculas); //devuelve "TROPICAL HOUSE"

//convertir a minusculas
let minusculas = texto.toLowerCase();
console.log(minusculas); //devuelve "tropical house"

//concatenar nuevas cadenas al texto original
let nuevaCadena = texto + " es un género musical";
console.log(nuevaCadena); //devuelve "Tropical House es un género musical"


//ejercicio 3
console.log("Ejercicio 3");
//a- almacenar numeros dentro de cadenas 
let c= '30';
let d = '20';
let e1 = 50;
console.log(c + d + e1); //devuelve 1020 


//b- convertir la cadena a entero se utiliza parseInt()
let c1 = parseInt(c);
let d1 = parseInt(d);
console.log(c1 + d1); //devuelve 50 

//c- realiza operaciones matematicas
suma = c1 + d1;
resta = e1 - d1;
multiplicacion = c1 * d1;
 division = e1 / d1;



//d convierta numeros nuevamentes a cadenas utilizando toString()
let d2 = d1.toString();
let e2 = e1.toString();
console.log(d2);
console.log(e2);


//e- concatene resultados
let resultadoSuma = "La suma es: " + suma;
let resultadoResta = "La resta es: " + resta;
let resultadoMultiplicacion = "La multiplicacion es: " + multiplicacion;
let resultadoDivision = "La division es: " + division;
console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(resultadoDivision);


//ejercicio 4
console.log("Ejercicio 4");

//a- registrar nombre y apellido
let nombre = "Karen";
let apellido = "Cuitiño";

//b- concatenar nombre y apellido
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto); //devuelve "Karen Cuitiño"

//c- calcular promedio de 3 notas utilizando funciones
function calcularPromedio(nota1, nota2, nota3){
    let promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}
let nota1 = 8;
let nota2 = 9;
let nota3 = 7;
let promedio = calcularPromedio(nota1, nota2, nota3);
console.log("El promedio es: " + promedio); //devuelve "El promedio es: 8"

//d- determinar si el estudiante aprueba
function determinarAprobacion(promedio){
    if(promedio >= 6){
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
let resultadoAprobacion = determinarAprobacion(promedio);
console.log(resultadoAprobacion); //devuelve "Aprobado"

//e- mostrar informacion final por consola
console.log("Nombre: " + nombreCompleto);
console.log("Promedio: " + promedio);
console.log("Resultado: " + resultadoAprobacion);

//ejercicio 5
console.log("Ejercicio 5");

//a- cuente la cantidad de vocales
function contarVocales(cadena){
    let vocales = 'a,e,i,o,u,A,E,I,O,U';
    let contador = 0;
    for(let i=0; i<cadena.length; i++){
        if(vocales.includes(cadena[i])){
            contador++;
        }
    }   
}
console.log("La cantidad de vocales es: " + contarVocales(texto)); //devuelve "La cantidad de vocales es: 5"


//b- determine cuámtos caracteres tiene la cadena
console.log("La cantidad de caracteres es: " + texto.length); //devuelve "La cantidad de caracteres es: 14"


//c- muestre cada caracter junto a su índice
for(let i=0; i<texto.length; i++){
    console.log("Índice: " + i + " - Caracter: " + texto[i]);
} 


//d- determine si la cadena contiene espacios
function contieneEspacios(cadena){
    return cadena.includes(" ");
}
console.log("La cadena contiene espacios: " 
    + contieneEspacios(texto)); //devuelve "La cadena contiene espacios: true"


//e- obtenga una subcadena utilizando substring()
let subcadena3 = texto.substring(0, 5);
console.log(subcadena3); //devuelve "Tropi"   


//ejercicio 6
console.log("Ejercicio 6");


// Datos de entrada
nombre = "Karen";
apellido = "Cuitiño";
edad = 29;

//a- generar un nombre de usuario concateando datos

function generarNombreUsuario(nombre, apellido, edad) {
    return nombre.toLowerCase() + apellido.toLowerCase() + edad;
}

function convertirEdadACadena(edad) {
    return edad.toString();
}

function obtenerIniciales(nombre, apellido) {
    return nombre[0].toUpperCase() + apellido[0].toUpperCase();
}

function contarCaracteres(nombre, apellido) {
    let nombreCompleto = nombre + " " + apellido;
    return nombreCompleto.length;
}

let nombreUsuario = generarNombreUsuario(nombre, apellido, edad);
console.log("Nombre de usuario: " + nombreUsuario);

let edadCadena = convertirEdadACadena(edad);
console.log("Edad en cadena: " + edadCadena);
console.log("Tipo: " + typeof edadCadena);

let iniciales = obtenerIniciales(nombre, apellido);
console.log("Iniciales: " + iniciales);

let cantidad = contarCaracteres(nombre, apellido);
console.log("Cantidad de caracteres del nombre completo: " + cantidad);