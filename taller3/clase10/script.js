console.log("Hola este es un mensaje de prueba");
const h1 = document.querySelector('h1');
const p1 = document.querySelector('.parrafito');
const p2 = document.querySelector('#pid');

const input = document.querySelector('input');
console.log({
    h1, p1, p2, input
});

console.log(h1);
console.log(input.value);
/**
 La propiedad .innerHTML nos permite agregar texto a la etiqueta y además colocar etiquetas 
 o código html desde JS.
 */ 
h1.innerHTML = "Hola <br> Soy Adriel";
p1.innerText = "Hoy es primero de mayo del <br> 2024";

//console.log(p2.getAttribute("class"));
//p2.setAttribute("class", "megaParrafo");

p2.classList.add("negro");
p2.classList.remove("negro");

input.value = "22";

console.log(document.createElement("img") );
