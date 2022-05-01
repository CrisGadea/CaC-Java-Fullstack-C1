// VARIABLES - CONSTANTES

var nombre = "Cristian";

// Por convencion, el nombre de las constantes deben escribirse en MAYUS
const MES_DE_CUMPLEANIOS = "Diciembre";

//console.log("Mi nombre es " + nombre + ", naci en el mes de " + MES_DE_CUMPLEANIOS);

nombre = "Hernan";

//console.log(nombre);

/* Para poder crear una nueva funcion debemos:
    1. Colocar function 
    2. Colocar el nombre de la funcion y sus parametros entre parentesis (si lo requiere)
    3. {} => Todo el codigo de la funcion va dentro de las llaves
    4. Toda funcion puedo o no devolver un dato
*/
function saludar (name) {
    console.log("Hola " + name);
    alert("Hola " + name);
}

//saludar(nombre);

// Nombres de funciones van con camelCase
function calcularSiEsMayorDeEdad () {
        edad = 12;

     // Creacion de una funcion
        const esMayorDeEdad = (edad) => {
            if (edad >= 18) {
                console.log("Es mayor");
            } else {
                console.log("Es menor");
            }
        }

    // Ejecucion de la funcion
    esMayorDeEdad(edad);
}


calcularSiEsMayorDeEdad();




var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

console.log(dias[2]);



var nombres = ["Cristian", "Hernan", "Marcelo"];

nombres.forEach(
    nombre => {
        console.log(nombre);
    }
);

var numeros = [1, 2, 3, 4];

const todosLosElementosSonMayoresQue4 = numeros.every(numero => numero > 4);

const hayAlgunElementoMayorQueCuatro = numeros.some(numero => numero > 4);

console.log(todosLosElementosSonMayoresQue4, hayAlgunElementoMayorQueCuatro);

const sumatoria = numeros.reduce((total, valor) => total + valor, 0);

console.log(sumatoria);