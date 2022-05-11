/* 
---------------  Lista de productos a mostrar en la página  -------------------
    * Array [] de productos ( de formato JSON {} )  // JSON: JavaScript Object Notation
*/
const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        img: "./img/imagen.jpg",
        precio: 1000,
        descripcion: "lorem insump 1",
        stock: 10
    },
    {
        id: 2,
        nombre: "Producto 2",
        img: "../img/img.jpg",
        precio: 2000,
        descripcion: "lorem insump 2",
        stock: 20
    },
    {
        id: 3,
        nombre: "Producto 3",
        img: "",
        precio: 3000,
        descripcion: "lorem insump 3",
        stock: 30
    },
    {
        id: 4,
        nombre: "Producto 4",
        img: "",
        precio: 4000,
        descripcion: "lorem insump 4",
        stock: 40
    },
    {
        id: 5,
        nombre: "Producto 5",
        img: "",
        precio: 5000,
        descripcion: "lorem insump 5",
        stock: 50
    }
];

// Convertimos el array de objetos en un formato tipo JSON
const productosEnStorage = JSON.stringify(productos);

// Guardamos en el localstorage el array JSON convertido de productos
localStorage.setItem("productos", productosEnStorage);


let productosObtenidosDelStorage = JSON.parse(localStorage.getItem("productos"));


/**
     * 
     * const card = document.createElement("div");
    card.className = "card";


    const parrafo = document.createElement("p");
    parrafo.innerHTML = "Hola";

    card.appendChild(parrafo);

    const products = document.getElementById("products");

    let texto = "${products} "

    // Literales


    const divFinal = ` <div class="card"> 
        <p> Hola </p>
    </div>`;

    //document.body.appendChild(divFinal);


    
        <div class="card"> 
          <p> Hola </p>
         </div>
     

    products.appendChild(card);

    const h3 = document.createElement("h3");
    h3.className = "card-header";

    const h4 = document.createElement("h4");
    h4.className = "card-tittle";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const p = document.createElement("p");
    p.className = "card-text";

    const button = document.createElement("a");
    button.className = "btn btn-primary";
    button.innerText = "Add";
    button.href = "#"; */





const generarcards = (productos) => {
    // Obtenemos el div que contendra las cards de productos
    const cards = document.getElementById("products");

    cards.classList = "container-fluid";


    let total = 0;

    productos.forEach( producto => {
        total += producto.precio;

        let cardProductos = document.createElement("div");
        cardProductos.className = "card";

        let card = `
            <img class="card-img-top" src="${producto.img}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${producto.nombre}</h4>
                <p class="card-text">
                    ${producto.descripcion}
                </p>
                <p class="card-text">
                    ${producto.precio}
                </p>
                <a href="#!" class="btn btn-primary">Agregar al Carrito</a>
            </div>
        `;

        cardProductos.innerHTML = card;

        products.appendChild(cardProductos);

        let precioTotal = document.createElement("p");
        precioTotal.className = "text-white";
        precioTotal.innerHTML = total;

        products.appendChild(precioTotal)

        console.log(total)


    });

    localStorage.setItem("precioTotal",total);

    
}


generarcards(productos);






let nombre = "Cristian";

let apellido = "Gadea";

var edad = 25;



// Creamos una funcion que imprime por consola del navegador nombre completo,
// recibiendo como parámetro el nombre y el apellido
function mostrarNombreCompleto (nombre1, apellido1) {
    var nombreCompleto = nombre1 + " " + apellido1;

    console.log(nombreCompleto);
}

// Para ejecutar la funcion que imprime un nombre completo, la llamamos

//mostrarNombreCompleto(nombre, apellido);


// ------------------------------------------- //

// Sobreescribimos los valores de las variables para ejecutar nuevamente la funcion
nombre = "Jose";

apellido = "Doe";

//mostrarNombreCompleto(nombre, apellido);

nombre = "Cristian";


// Estructuras

// Condicionales

/*
if (nombre == "Cristian" && edad >= 18) {
    console.log("Bienvenido Cristian, ya sos mayor de edad");
} else {
    console.log("Bienvenido " + nombre + ", esperaba un Cristian mayor");
}
*/

// Estructura Iterativa (Bucle)

//variale++;  => incrementar el valor de la variable en +1


// Bucle for => Repite un codigo tantas veces como le indiquemos en la validacion
for (let numero = 1; numero <= 10; numero++) {
    console.log(numero);
}

