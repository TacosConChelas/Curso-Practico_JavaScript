// vamos a calcular la altura de un triangulo isoseles
let ladoA1= prompt("¿Cuanto mide el lado a del triangulo?");
let ladoA2= prompt("¿Cuanto mide el lado c del triangulo?");
let base= prompt("¿Cuanto mide la base del triangulo?");

function calcularHTriangulo(a1, a2, b) {
    if (a1 === a2 && a1 != b) {
        const alturaencontrada = Math.sqrt(a1**2 - (base**2 / 4));
        return alturaencontrada;
    } else if (a1 != a2){
        console.log("Sus lados a y b no son iguales");
    } else {
        console.log("Es otro tipo de triangulo");
    }  
}
calcularHTriangulo(ladoA1, ladoA2, base);


