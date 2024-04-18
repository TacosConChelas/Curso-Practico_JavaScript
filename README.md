

---

Curso-Practico_JavaScript
Un repositorio para el Curso Practico de JS

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
...

### Taller #1 figuras geometricas

- Primer paso: definir las formulas 
- Segundo paso: inplementar la formulas formulas en JavaScript
- Tercer paso: crear funciones
- Cuarto paso: integrar JS con HTML

### Taller #2 Porcentajes y Descuentos

- Primer paso: definir las formulas 
- Segundo paso: inplementar la formulas formulas en JavaScript
- Tercer paso: crear funciones
- Cuarto paso: integrar JS con HTML

### Taller #3 Funciones
- Las funciones son pedasos de codigo que nos permiten ejecutarlas en cualquier otra parte de nuestro programa, este mismo puede ser utilizado varias veces
mandandola a llamar. 
- Sintaxis:

````
    function nombreDeLaFuncion(Parametros){
        //instrucciones
        //return:
        return console.log("Este es opcional");
    }
````
- ¿Cual es la diferencia entre parametros y argumentos de una funcion?

Al momento de ser creadas las funciones recuben PARAMETROS y se colocan en los parentesis, pero cuando usamos las funciones a estas les damos ARGUMENTOS.

### Taller #4 Condicionales 
<p>
    Esta es la forma en la que ejecutamos bloques de codigo dependiendo de una consicion o validacion.
</p>

#### Tipos: 
- Switch: este nos permite evaluar una variable dentro de sus parentesis y dependiendo del valor de esta se va a ejecutar un distinto CASE con su respectivo bloque de codigo.
Sintaxis:
````
    switch (key) {
        case value:
            //instrucciones
            break;
        default:
            //instrucciones
            break;
    }
````
- If y Else: estas tienen una condicion que se va a estar alidando, la cual si es verdadera se va a ejecutar el bloque de codigo, además podemos agregar mas de estas y un caso definitivo con el ELSE siendo el ultimo en ejecutarse si las anteriores no se cumplieron.
Sintaxis:
````
   if (condition) {
      //instrucciones
    } else {
      //instrucciones
    }
````

### Taller #5 Ciclos
- FOR: este nos permite inicialisar una variable y usarla (aumentando o reduciendo su valor) para controlar las iteraciones y dependiendo del valor de esta variable el FOR puede serguirse repitiendo o detenerse.
Sintaxis:
````
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    
    }
````
- WHILE y DO WHILE: La diferencia entre el WHILE   y el DO WHILE es que el WHILE primero pregunta si la condición es válida para después ejecutar el código y el DO WHILE primero hace y luego pregunta.
Sintaxis.
````
    //WHILE 
    while (condition) {
    
    }
    //DO WHILE      
    do {
    
    } while (condition);
````


