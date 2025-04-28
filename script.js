document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;
    

    const mensajeEnviado = document.getElementById('mensaje-enviado');
    mensajeEnviado.textContent = `¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente.`;
    mensajeEnviado.style.display = 'block';
    
    
    const datosUsuario = document.getElementById('datos-usuario');
    datosUsuario.innerHTML = `
        <h3>Información enviada:</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo electrónico:</strong> ${correo}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
        <p><strong>Fecha de envío:</strong> ${new Date().toLocaleDateString('es-ES', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}</p>
    `;
    datosUsuario.style.display = 'block';
    

    this.reset();
    
    
    setTimeout(() => {
        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    }, 500);
});


const menuHamburguesa = document.querySelector('.menu-hamburguesa');
menuHamburguesa.addEventListener('click', function() {
    const enlaces = document.querySelector('.enlaces-navegacion');
    enlaces.classList.toggle('mostrar');
});
