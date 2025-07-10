// Elementos del DOM
const display = document.getElementById("display");
const btnIniciar = document.getElementById("iniciar");
const btnMarcarTiempo = document.getElementById("marcartiempo");
const btnReiniciar = document.getElementById("reiniciar");
const listaTiempos = document.getElementById("marcadetiempo");

let tiempoInicio = 0;
let tiempoAcumulado = 0;
let intervalo;
let enMarcha = false;

// Actualiza el texto del cronómetro
function actualizarDisplay() {
    const ahora = Date.now();
    const tiempoTranscurrido = ahora - tiempoInicio + tiempoAcumulado;

    const horas = Math.floor(tiempoTranscurrido / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoTranscurrido % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoTranscurrido % (1000 * 60)) / 1000);
    const milisegundos = tiempoTranscurrido % 1000;

    display.textContent = 
        `${String(horas).padStart(2, "0")}:` +
        `${String(minutos).padStart(2, "0")}:` +
        `${String(segundos).padStart(2, "0")}.` +
        `${String(milisegundos).padStart(3, "0")}`;
}

// Iniciar / Pausar
btnIniciar.addEventListener("click", () => {
    if (!enMarcha) {
        tiempoInicio = Date.now();
        intervalo = setInterval(actualizarDisplay, 10);
        btnIniciar.textContent = "⏸"; // Cambiar a icono de pausa
        enMarcha = true;
    } else {
        clearInterval(intervalo);
        tiempoAcumulado += Date.now() - tiempoInicio;
        btnIniciar.textContent = "▶"; // Volver al icono de inicio
        enMarcha = false;
    }
});

// Marcar tiempo
btnMarcarTiempo.addEventListener("click", () => {
    if (tiempoInicio || tiempoAcumulado > 0) {
        const li = document.createElement("li");
        li.textContent = display.textContent;
        listaTiempos.appendChild(li);
    }
});

// Reiniciar
btnReiniciar.addEventListener("click", () => {
    clearInterval(intervalo);
    tiempoInicio = 0;
    tiempoAcumulado = 0;
    enMarcha = false;
    display.textContent = "00:00:00.000";
    btnIniciar.textContent = "▶"; // Reiniciar al icono de inicio
    listaTiempos.innerHTML = "";
});