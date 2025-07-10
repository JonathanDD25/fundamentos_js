let control = 0;
let contraseña = "santiago_seña";

function verificar(){
    let clave = document.getElementById(`clave`).value;
    if(clave != contraseña || clave ==""){
        alert("contraseña incorrecta o vacia, intentelo de nuevo");
        control++;
            if(control>=3){
                alert("agoto el numero de intentos permitidos, aceso bloqueado... contacte a soporte tecnico")
            }
            } else{
                    window.open("http://www.google.com");
    }
}
