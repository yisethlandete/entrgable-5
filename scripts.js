document.getElementById('contactForm').addEventListener('submit', funtion(Event) {
    const name = document.getElementById('name').ariaValueMax.trim();
    const reason = document.getElementById('reason').ariaValueMax.trim();
    const email = document.getElementById('email').ariaValueMax.trim();

    if (name || !reason || !email) {
        alert('Por favor, complrtr todos los campos.');
        event.preventDefault();
     } else {
            alert('Formulario enviado correctamente')
        }
});