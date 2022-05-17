const formulario = document.getElementById("form");

const userEmail = document.getElementById("email");
const userPass = document.getElementById("pass");

const alertSuccess = document.getElementById("alertSuccess");
const alertEmail = document.getElementById("alertEmail");
const alertPass = document.getElementById("alertPass");

// SETEAMOS LOS VALORES DE LOGIN POR DEFECTO
const pass = 1234;
const email = "mail@mail.com";


// funciones = firma + cuerpo

// Firma: Esta compuesta por: la palabra "function" + nombre de la funcion + parentesis (parametro1, parametro2) => Parametros
// Ej: function ejemplo (parametro) // ()

// Cuerpo: Esta comprendido entre llaves (bloque de codigo de la funcion) {}

// Creamos la funcion

// Forma tradicional
// function pintarMensajeExito () {
//     alertSuccess.classList.remove("d-none");
//     alertSuccess.textContent = "Login Exitoso";
// }

// Arrow Function
const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Login Exitoso";
};

const pintarMensajeError = (errores) => {
    //RECORREMOS LA LISTA DE ERRORES (ARRAY) => FUNCION FOREACH
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });

};

// FUNCION DEL EVENTO SUBMIT CON JS
formulario.addEventListener("submit", (evento) => {

    // SIEMPRE QUE EJECUTAMOS UN EVENTO DESDE JS CON HTML
    // DEBEMOS INICIALIZAR EL EVENTO
    evento.preventDefault();

    alertSuccess.classList.add("d-none");

    // GENERAMOS UN ARRAY CON LOS MENSAJES DE ERROR
    const errores = [];

    // validar email
    if (userEmail.value != email) {
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Email Inválido",
        });
    } else {
        
        if (userEmail.value.length > 35) {
            userEmail.classList.add("is-invalid");

            errores.push({
                tipo: alertEmail,
                msg: "Cantidad de caracteres supera el limite",
            });
        }
        else{
            userEmail.classList.remove("is-invalid");
            userEmail.classList.add("is-valid");
            alertEmail.classList.add("d-none");
        }
        
    }

    // Validamos la contraseña del user

    if (parseInt(userPass.value) != pass) {
        errores.push({
            tipo: alertPass,
            msg: "Contraseña Inválida",
        });
    } else {
        alertPass.classList.add("d-none");
    }

    if (errores.length != 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");

    // Ejecutamos la funcion
    pintarMensajeExito();
});