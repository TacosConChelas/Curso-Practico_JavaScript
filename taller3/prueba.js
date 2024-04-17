function hola(){
    return console.log("Hola");
}
hola();

//Esta varaiuble lo que hace es que se ingresan un nombre y un apellido como parametro y los regresa juntos.
function prueba(name, lastname){
    return console.log(name + lastname);
}

prueba("Adriel", " Hernández");

//ejercicio
function nombreC(name, lastname, nickname){
    return console.log("Mi nombre es " + name + " " +  lastname + "pero prefiero que me digas " + nickname);
}
nombreC("Adriel", "Hernandez ", "TacosConChelas");