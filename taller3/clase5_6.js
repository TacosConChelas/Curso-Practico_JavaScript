/* 
switch (key) {
    case value:
        
        break;

    default:
        break;
}

if (condition) {
    
} else {
    
}


**/

//clase 6
/* 

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

while (condition) {
    
}

do {
    
} while (condition);

**/



let i = 0;
while (i < 5) {
    //console.log("el valor de i es: " + i);
    i++;
}
i = 10;
while (i >= 2) {
    //console.log("el valor de i es: " + i);
    i--;
}

let n = 0;
/* 
do {
    let pregunta = prompt("escribe el resultado de sumar 2 +2");
    n = pregunta;
} while (n =! 4);
**/
const cosas = [1, "pepe", undefined, true, "hola", 33];
function firstNum(arreglo){
    console.log(arreglo[0]);
}
firstNum(cosas);
console.log(" ");

//Crear una funcion que reciba un array e imprima uno por uno todos sus elementos.
function imprTodosElementos_facil(array) {
    //este se le llama FOR EACH
    array.forEach(element => {  console.log(element);   });
}   imprTodosElementos_facil(cosas);

function imprTodosElementos_dificil(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}  


//Crear una funcion para que reciba un objeto e imprima todos sus atributos.
const objeto3 = {
    nom: "Adriel",
    lastname: "Hernandez",
    age: 22,
    id: 23
}

function objetoValores(objeto){
    //La función Object.values() nos permite meter un objeto como argumento y esta se va a encargar de imprimirla si es que está dentor de console.log()
    console.log(Object.values(objeto));
}
objetoValores(objeto3);


