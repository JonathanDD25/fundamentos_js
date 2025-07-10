function comenzar(){
setTimeout(cumplido, 5000);
}
function cumplido(){
    swal("¡se agoto el tiempo!")
}
function iniciar(){
    let elegirSegundos = document.getElementById("tiempoElegido").value;
    setTimeout(finalizado, 1000 * elegirSegundos);

}
function finalizado(){
    swal("¡se agoto el tiempo!");
}
//Cuenta regresiva
function cuentaRegresiva() {
    let elegirSegundos = document.getElementById("tiempoCronometro").value;
    let contador = document.getElementById("contador");
    let textoTiempo = document.getElementById("txtTiempo");
    textoTiempo.style.color = "blueviolet";

    textoTiempo.style.display="none"; //No mostrar el texto de inicio

    if (!elegirSegundos || elegirSegundos <= 0) {
        swal("Por favor, ingrese un tiempo válido.");
        return;
    }

    //Cambiar texto indicando que el temporizador ha iniciado
    textoTiempo.style.display = "block"; //Mostrar el texto
    textoTiempo.textContent = "¡Tiempo inicializado!";
    textoTiempo.style.color = "green";

    //Inicia la cuenta regresiva
    function actualizarContador(segundosRestantes) {
        contador.textContent = segundosRestantes;

        if (segundosRestantes > 0) {
            setTimeout(() => actualizarContador(segundosRestantes - 1), 1000);
        } else {
            textoTiempo.textContent = "¡Tiempo finalizado!";
            textoTiempo.style.color = "blueviolet";
            swal("¡Se ha agotado el tiempo!");

            //Vaciar el campo de entrada
            document.getElementById("tiempoCronometro").value = "";
        }
    }
    actualizarContador(elegirSegundos);
}
