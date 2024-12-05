let currentIndex = 0;

// Función para mover el carrusel
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const newTransformValue = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.carousel-images').style.transform = newTransformValue;
}

// Mostrar el QR o enlace dependiendo del tipo de dispositivo
function showDeviceSpecificLink() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipod|android|blackberry|windows phone/i.test(userAgent);

    const qrContainer = document.getElementById("qr-container");
    const linkContainer = document.getElementById("link-container");

    if (isMobile) {
        // Mostrar el enlace en teléfonos
        linkContainer.style.display = 'block';
        qrContainer.style.display = 'none';
    } else {
        // Mostrar el QR en PC
        qrContainer.style.display = 'block';
        linkContainer.style.display = 'none';
    }
}

// Inicializar la página
window.onload = function() {
    // Iniciar el carrusel
    showDeviceSpecificLink();
};
