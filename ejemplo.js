let a = '10';
let b = '20';
console.log(a + b); //devuelve 1020 

// para convertir a numero entero se utiliza parseInt() o Number()
let suma = parseInt(a) + parseInt(b);
console.log(suma); //devuelve 30


let c=10, d=20;
console.log(c + d); //devuelve 30
let concatenacion = c.toString() + d.toString();
console.log(concatenacion); //devuelve 1020


//cantidad de caracteres de una cadena de texto
let texto = "Tropical House";
let resultado = texto.length;
console.log(resultado);

//imprimir cada caracter de una cadena de texto
{console.log(texto[0]);
}


{console.log(texto[13]);
}


//recorrer una cadena de texto al reves
for (let i = texto.length - 1; i >= 0; i--) {
    console.log(texto[i]);
}

