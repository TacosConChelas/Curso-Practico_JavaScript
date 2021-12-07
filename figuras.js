console.log("Hello world!");

// codigo del cuadrado
console.group("Cuadrados");


function perimetroCuadrado(lado) {
    return lado * 4;
};
perimetroCuadrado();

function areaCuadrado (lado) {
    return lado * lado;
};
areaCuadrado();

console.groupEnd(); 


// codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};
perimetroTriangulo();

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
    
}
areaTriangulo();
//  (ladoTriangulo3 * alturaTriangulo) / 2;
// console.log("el area del triangulo mide " + areaTriangulo + " centimetros cuadrados");
console.groupEnd();

// Circulo
console.group("Circulo");


const pi = Math.PI;

function diametro(radio) {
    return radio * 2;
};
diametro();
function circunferencia(radio) {
    return (radio * 2) * pi;
};
circunferencia();
function areaCirculo(radio) {
    return (radio * radio) * pi;
};
areaCirculo();

console.groupEnd();
