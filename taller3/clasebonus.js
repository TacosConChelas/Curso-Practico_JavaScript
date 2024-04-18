/* 
Hancer una funcion uqe reciba una respuesta y dependiendo del tipo de suscripcion mandar un mensjae usando solo if

**/
function tipoSuscripcion(suscripcion) {
    if (suscripcion = "Free") {
        console.log("Tu tipo de suscripcion es FREE");
        return;
    } if (suscripcion = "Gold") {
        console.log("Tu tipo de suscripcion es GOLD");
        return;
    } if (suscripcion = "Expert") {
        console.log("Tu tipo de suscripcion es EXPERT");
        return;
    }
}

//Hacer el ejercicio anterior pero esta ves usando un solo if y con arrays u objetos 

const tipos = {
    free: "Es una suscripcion free",
    gold: "Es una suscripcion gold",
    expert:"Es una suscripcion expert"
}
//podemos acceder a las propiedades de los objetos mediante la siguiente sintaxis: tipos["free"];
//Tenemos que especificar el nombre de su atributo para acceder a este.

function tipoDSus(sus){
    console.log(tipos[sus]);
}
tipoDSus("free");
/* 
En este caos lo que va a hacer es que dependiedo del argumento que le demos a la funcion este va a ser guardado luego lo vamos a poner dentro de los corchetes para 
que dentro de este objeto se busque un atributo con el mismo nombre que el valor que tiene contenido el argumento sus, por lo que al encontrarlo lo va a impirmir el mensjae 
que le dejamos, pero si queremos hacerlo con una condicion else
**/

function tipoDSus_else(sus) {
    if (tipos[sus]) {
        console.log(tipos[sus]);
        return;
    }
    console.log("Este tipo de suscripcion no existe");
}
tipoDSus_else("free");