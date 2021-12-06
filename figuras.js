console.log("Hello world!");

// codigo del cuadrado
console.group("Cuadrados");
const ladosCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladosCuadrado + "centimetros");

const perimetroCuadrado = ladosCuadrado * 4;
console.log("El perimetro del cuadrado es " + perimetroCuadrado + "centimetros");

const areacuadrado = ladosCuadrado * ladosCuadrado;
console.log("El area del cuadrado es " + areacuadrado + " centimetros cuadrados");
console.groupEnd(); 


// codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden " 
+ ladoTriangulo1 + " cm, " 
+ ladoTriangulo2 + " cm, y " 
+ ladoTriangulo3 + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
console.log("El perimetro del triangulo es " + perimetroTriangulo + " cm");

console.log("La altura del triangulo mide " + alturaTriangulo + " cm");

const areaTriangulo = (ladoTriangulo3 * alturaTriangulo) / 2;
console.log("el area del triangulo mide " + areaTriangulo + " centimetros cuadrados");
console.groupEnd();

// Circulo
console.group("Circulo");

const radiooCirculo = 4;
const diametroCirculo = radiooCirculo * 2;
const pi = Math.PI;
const circunferencia = diametroCirculo * pi;
const areaCirculo = (radiooCirculo * radiooCirculo) * pi;

console.log("el radio del circulo mide " + radiooCirculo + " cm" + " y el diametro mide " + diametroCirculo  + " cm");
console.log("el perimetro del circulo mide " + diametroCirculo + " cm");
console.log("PI vale " + pi);
console.log("El area del circulo vale " + areaCirculo + " centimetros cuadrados");
console.groupEnd();
