let area = document.getElementById("comentarios")
area.style.resize = "none";

function comentar(){
    const comentario = document.getElementById("comentarios").
    value.trim();

    if(comentario.length === 0){
        swal("usted no ha digitado ninguna letra, porfavor escriba antes de enviar");
    }
    else if(comentario.length > 100){
        swal("el comentario es muy largo, resuma su idea y vuelva a escribir");
    } else{
        swal("¡Gracias por su comentario!");
    }
}