// Obtengo las etiquetas (elementos) del DOM desde JS
//let h1 = document.getElementById("uno");
let p = document.getElementById("parrafo1");

let h1 = document.querySelector("#uno");

let button = document.getElementById("boton");

// Crear etiquetas desde JS
let h2 = document.createElement("h2");

// Modificamos los Textos de las etiquetas desde JS
h1.innerHTML = "Bienvenido";
p.innerHTML = "lorem insup";
h2.innerHTML = "Etiqueta creada desde JS";

// Modificamos los estilos desde JS
h1.style.color = "green";

//Agregamos una etiqueta dentro de otra con JS
p.appendChild(h2);

//Eliminamos un nodo/etiqueta que se encuentra dentro de otra, desde JS
p.removeChild(h2);


// Otra forma de capturar eventos desde JS y ejecutar una funcion
//button.addEventListener(onclick,start);


// Clases en JS
class Perro {
    
    constructor(){
        let colorDePelo = "naranja";
        let cantDePatas = 4;
    }

    ladrar = () =>{
        console.log(" El perro ladró, dijo: Guau");
    }
}

// Objetos en JS

// Creamos un perro y lo hacemos ladrar

const perro1 = new Perro();

perro1.ladrar();

function start(){
    alert("Has hecho click!");
}

const perro2 = {
    ladrar() {
        console.log("El segundo perro está ladrando: guaf");
    }
};

perro2.ladrar();