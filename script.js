
document.getElementById('miboton').addEventListener('click', Saludar)
function Saludar(){
document.getElementById('frase').innerHTML='Hola, bienvenid@'

}

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    var confettiButton = document.getElementById('miboton');

    confettiButton.addEventListener('click', function () {
        // Ejecuta confetti al hacer clic en el botón
        confetti({
            particleCount: 5000, // Número de partículas
            spread: 80,         // Ángulo de dispersión
            origin: { y: 0.6 }, // Posición vertical del lanzamiento
            colors: ['#D20062','#134B70','#c007f6','#ff0a0a', '#0aff0a', '#0a0aff', '#ff0aff', '#e3f607'], // Colores del confeti
            zIndex: 1000        // Asegúrate de que el confeti esté por encima de otros elementos
        });
    });
});
