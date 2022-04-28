// De-Creacion de una variable
var nombre, edad, fechaNacimiento, dni;

// Asignacion de una variable
nombre = "Cristian";
edad = 25;


if(true){
    let nombre = "Hernan";
    //console.log(nombre);
}


//console.log(nombre);


// Creacion de la funcion
function leerNombre(){
    return nombre;
}

// LLamado o ejecucion de la funcion

/*
var nombreCompleto = leerNombre().toUpperCase() + " Gadea";
var nombreMayus = nombreCompleto.toUpperCase();

var nombres = ["Carlos", "Maria", 12, true];

nombres.forEach(nombre => {
    if (typeof nombre == "string") {
        nombre.toUpperCase();
        console.log(nombre);
    }
})

console.log("Hola".toLowerCase());

console.log(nombreCompleto);





var texto = "bfsiubfwui wfeiongiwengoi oewignogew";

console.log(texto.length);

texto = texto.repeat(3);

console.log(texto);

var incluye = texto.includes("bfsiubfwui");
console.log(incluye);


*/



// Capturar los datos del formulario con js



function validarForm (){

    const nombreForm = document.getElementById("name").value;

    const contra = document.getElementById("pass").value;

    const numero = document.getElementById("number").value;

    localStorage.setItem("nombreDeUsuario", nombreForm);
    localStorage.setItem("contraDeUsuario", contra);
    localStorage.setItem("numeroDeUsuario", numero);
    
    console.log(nombreForm, contra);

    console.log(numero);

   if(numero > 4){
        alert("Es mayor a 4");
   } else {
        alert("Es menor que 4");
   }

}





console.log(localStorage.getItem("nombreDeUsuario"));

localStorage.clear()