function focalizar() {
    document.getElementById("nombre").value="";
    document.getElementById("nombre").style.border="";
    document.getElementById("nombre").style.borderRadius="";
}

function validarVacios(){
    if (document.getElementById("nombre").value==""){
    document.getElementById("nombre").style.border="2px solid red";
    document.getElementById("nombre").style.borderRadius="8 px";
    swal("¡debe  de ingresar el nombre!");
    }
}
