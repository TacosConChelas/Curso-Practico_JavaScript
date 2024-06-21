console.log("Hola este es un mensaje de prueba");
const h1 = document.querySelector('h1');
const p1 = document.querySelector('.parrafito');
const p3 = document.querySelector('#parrafoID');

const input = document.querySelector('input');
console.log({
    h1, p1, p3, input
});

console.log(h1);
console.log(input.value);
/**
 La propiedad .innerHTML nos permite agregar texto a la etiqueta y además colocar etiquetas 
 o código html desde JS, es decir, si se encontrase codigop html dentro del texto este se 
 transformarria en codigo html ejecutandose tambien.
 */ 
h1.innerHTML = "Hola <br> Soy Adriel";
p1.innerText = "Hoy es primero de mayo del <br> 2024";

//console.log(p2.getAttribute("class"));
//p2.setAttribute("class", "megaParrafo");

//p2.classList.add("negro");
//p2.classList.remove("negro");



console.log();

//img.setAtribute('src', 'https://unsplash.com/es/s/fotos/perros-salchicha');

console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

//Existe otra pero para las clases en especifico, para añadirle una clase a una etiqueta:
h1.classList.add('rojo');
h1.classList.remove('rojo');

input.value = "22"; 

//Crear el elemento HTML que nostros querramos:
//document.createElement('img') ;
const img = document.createElement('img') ;

img.setAttribute('src' , 'C:\\imagenespara perfiles\\8c76ad8758f30c66ef0707ad1235d30b.jpg');
console.log(img);

//p3.append(img);
p3.innerHTML = ""; 
p3.appendChild(img);






 


