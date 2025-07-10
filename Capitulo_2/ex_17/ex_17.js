// ejercicio de contador
let contador = 0;

function actualizarvista(){
    document.getElementById("valorcontador").textContent = `valor: ${contador}`;
}

function incrementar(){
    contador++;
    actualizarvista();
}
    
function decrementar(){
    contador--;
    actualizarvista();
}
