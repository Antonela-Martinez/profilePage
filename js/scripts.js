function mostrarDescripcion(idDescripcion) {
    var descripcionDetallada = document.getElementById(idDescripcion);

    if (descripcionDetallada.classList.contains('d-none')) {
        descripcionDetallada.classList.remove('d-none');
    } else {
        descripcionDetallada.classList.add('d-none');
    }
}

function enviarFormulario() {
    var email = document.getElementById('email').value;
    var mensajeExito = document.getElementById('mensaje-exito');
    var formulario = document.getElementById('contactForm');

    // Validar el email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor ingresa un email válido.');
        return false; // Evitar el envío del formulario
    }

    // Mostrar mensaje de éxito
    mensajeExito.classList.remove('d-none');

    // Ocultar formulario después de mostrar el mensaje
    setTimeout(function() {
        formulario.reset(); // Limpiar el formulario
        mensajeExito.classList.add('d-none'); // Ocultar el mensaje de éxito
    }, 3000); // Mostrar el mensaje durante 2 segundos

    return false; // Evitar el envío real del formulario

}