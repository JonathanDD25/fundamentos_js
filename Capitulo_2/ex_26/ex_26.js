function pesta(){
    let pestan = open();
    pestan.document.writeln("se abrio como nueva pestaña");
}
function ventana(){
    let ventana = open("","", "width=400, height=250");
    ventana.document.writeln("se abrio como una nueva ventana");
}
function confirmar(){
    let respuesta = confirm("¿Desea salir del sitio?");
    if(respuesta == true){
        window.close();
    }
}
// explicacion
/* 
let ventana = open("","", "width=400, height=250");
en este caso las comillas vacias indican que no se carga una url especifica, ademas que debe declararse del navegador actual y crear una nueva ventana con las dimensiones especificas.
*/
function redireccionar(){
    if(window.confirm("¿Desea salir de la pagina actual?")){
        window.location = "https://github.com/"
    }
}
// conteo y disponibilidad de caracteres

document.getElementById("texto").addEventListener("keyup", caracteres);
function caracteres(){
    let can = document.getElementById("texto").value.length;
    let disponible = 20 - parseInt(cant);

    document.getElementById("cantidad").innerHTML = disponible;
    if(disponible == 0){
        swal("¡Cantidad de caracteres agotados!");
    }
}