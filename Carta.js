document.addEventListener("DOMContentLoaded", () => {
    // Creamos el objeto de audio mediante JavaScript
    const musica = new Audio("Frances Limon - Enanitos Verdes.mp3");
    musica.volume = 0.3
    musica.loop = true; // Para que se repita en bucle

    const playBtn = document.getElementById("playBtn");

    playBtn.addEventListener("click", () => {
        // Reproducimos la música y manejamos posibles restricciones del navegador
        musica.play()
            .then(() => {
                playBtn.textContent = "¡Te amo~♡!";
                playBtn.disabled = opcional = true; // Opcional: desactiva el botón tras hacer clic
            })
            .catch(error => {
                console.log("Error al reproducir el audio: ", error);
            });
    });
});