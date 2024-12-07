let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-item");
showSlides(slideIndex);

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
}

function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

// Cambiar de imagen automáticamente cada 5 segundos
setInterval(function() {
    moveSlide(1);
}, 5000);

// ================================= CARRITO DE COMPRAS =================================

let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio, idCantidad) {
    const cantidad = parseInt(document.getElementById(idCantidad).value, 10);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }

    carrito.push({ nombre, precio, cantidad });
    alert(`${nombre} agregado al carrito.`);
}

// Función para mostrar el carrito en el modal
function verCarrito() {
    const modal = document.getElementById("modalCarrito");
    const resumenCarrito = document.getElementById("resumenCarrito");

    resumenCarrito.innerHTML = ""; // Limpia el contenido anterior
    let total = 0;

    if (carrito.length === 0) {
        resumenCarrito.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        carrito.forEach(item => {
            const precioTotal = item.precio * item.cantidad;
            total += precioTotal;
            resumenCarrito.innerHTML += `
                <p>${item.nombre} x${item.cantidad} - $${item.precio} c/u = $${precioTotal}</p>
            `;
        });

        resumenCarrito.innerHTML += `<h3>Total: $${total}</h3>`;
    }

    modal.style.display = "block"; // Muestra el modal
}

// Función para cerrar el modal del carrito
function cerrarCarrito() {
    const modal = document.getElementById("modalCarrito");
    modal.style.display = "none"; // Oculta el modal
}

// Función para enviar el pedido (simulado)
function enviarPedido() {
    alert("Pedido enviado con éxito!");
    carrito = []; // Limpia el carrito
    cerrarCarrito(); // Cierra el modal
}

        // JavaScript para manejar el formulario
        document.getElementById("registroForm").addEventListener("submit", function(e) {
            e.preventDefault(); // Evitar el envío real del formulario

            // Mostrar el mensaje de éxito
            const mensajeExito = document.getElementById("mensajeExito");
            mensajeExito.style.display = "block";

            // Limpiar los campos del formulario
            e.target.reset();

            // Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
                mensajeExito.style.display = "none";
            }, 3000);
        });