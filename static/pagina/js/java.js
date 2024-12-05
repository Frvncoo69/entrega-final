// Variables globales para controlar el carrusel
var currentIndex = 0;

function moveCarousel(direction) {
    var carousel = document.querySelector('.carousel');
    var totalImages = carousel.children.length;
    
    // Actualizar el índice actual con la dirección
    currentIndex += direction;

    // Si el índice se sale de rango, vuelve al principio o al final
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Regresar a la última imagen
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; // Volver a la primera imagen
    }

    // Mover el carrusel a la posición correcta (desplazar las imágenes)
    carousel.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

// Detección de dispositivo usando el Agente de Usuario
function detectDevice() {
    var userAgent = navigator.userAgent;
    var isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

    if (isMobile) {
        document.getElementById("mobile-download").style.display = "block";
        document.getElementById("pc-download").style.display = "none";
    } else {
        document.getElementById("mobile-download").style.display = "none";
        document.getElementById("pc-download").style.display = "block";
        generateQRCode();
    }
}

// Generar el QR con la URL de la APK usando la API pública
function generateQRCode() {
    var qrContainer = document.getElementById('qr-code');
    var apkUrl = 'https://github.com/Frvncoo69/app_final/releases/download/1.0/tecnostore.apk';
    var qrImageUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(apkUrl) + "&size=150x150";

    var img = document.createElement("img");
    img.src = qrImageUrl;
    img.alt = "QR Code para descargar la app";

    qrContainer.innerHTML = "";
    qrContainer.appendChild(img);
}

// Ejecutar la detección cuando la página cargue
window.onload = function () {
    detectDevice();
    window.onresize = detectDevice;
};
