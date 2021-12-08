// variables
const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConCescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConCescuento) / 100;

console.log({
    precioConDescuento,
    precioOriginal,
    descuento,
    porcentajePrecioConCescuento,
});