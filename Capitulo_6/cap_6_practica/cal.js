const pantalla = document.getElementById("pantalla");

function insertar(valor) {
    pantalla.value += valor;
}

function borrar() {
    pantalla.value = "";
}

function calcular() {
    try {
        // cerramos funciones abiertas (opcionalmente puedes validar mas)
        pantalla.value = eval(pantalla.valor);
    } catch (e) {
        pantalla.value = "error";
    }
}