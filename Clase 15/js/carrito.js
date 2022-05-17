// PASOS

// Obtener el evento onclick del usuario en los botones agregar al carrito

// En el evento, agregar el producto seleccionado al array del carrito

// Obtenemos los datos del carrito
let carrito = [];

// Validamos que tenemos datos en el carrito en el storage
if (localStorage.getItem("Carrito")) {
    carrito = JSON.parse(localStorage.getItem("Carrito"));
}

const generarCards = (productos) => {
    // Obtenemos el div que contendra las cards de productos
    let cards = document.getElementById("carrito");

    let total = 0;
    
    productos.forEach( producto => {
        
        total += producto.precio;  // total = total + producto.precio;

        // Creamos la etiqueta Card
        let cardProductos = document.createElement("div");
        cardProductos.className = "card m-3";

        let card = `
            <img class="card-img-top h-50 w-50" src="${producto.img}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${producto.nombre}</h4>
                <p class="card-text">
                    ${producto.descripcion}
                </p>
                <p class="card-text">
                    ${producto.precio}
                </p>
                <a class="btn btn-primary" id="cart${producto.id}">Eliminar</a>
            </div>
        `;
    
        cardProductos.innerHTML = card;
        cards.appendChild(cardProductos);

        let productCard = document.getElementById("cart" + producto.id);

        productCard.addEventListener("click", (evento)=>{
            evento.preventDefault();
            carrito.splice(producto.id - 1, 1);
        });


    });
    
}


generarCards(carrito);


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    localStorage.setItem("Carrito", JSON.stringify(carrito));
});
