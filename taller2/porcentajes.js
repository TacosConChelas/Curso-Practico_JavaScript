// variables
const precioOriginal = 120;
const descuento = 18;




// console.log({
//     precioConDescuento,
//     precioOriginal,
//     descuento,
//     porcentajePrecioConCescuento,
// });

// funcion
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConCescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConCescuento) / 100;
    
    return precioConDescuento;
}