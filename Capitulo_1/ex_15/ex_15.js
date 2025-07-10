// // Funciones

// function saludo(){
//     document.writeln("hola mundo", "<br>");
//     console.log("hola mundo");

// }
// saludo ();

// function despedida(){
//     document.writeln("adios mundo", "<br>");
//     console.log("chao mundo");
    
// }
// despedida ();

// function saludarusuario(nombreusuario, apellidousuario){
//     document.writeln("Hola ", nombreusuario, " ", apellidousuario, " bienvenido(a)", "<br>");
// }
// let nombre = prompt("Dime tu nombre");
// let apellido = prompt("Dime tu apellido");
    
// saludarusuario (nombre,apellido);

// function saludarusuario(nombrepaciente, apellidopaciente){
//     document.writeln("Hola ", nombrepaciente, " ", apellidopaciente, " bienvenido(a)");
// }
// let RecepcionaNombrePaciente = prompt("Dime tu nombre");
// let RecepcionApellidoPaciente = prompt("Dime tu apellido");
    
// saludarusuario (RecepcionaNombrePaciente,RecepcionApellidoPaciente);

// funciones con calculos simples

function calcularAreaRectaguo(base, altura){
    let area = base + altura;
    return area;
}
console.log("el area del rectangulo es: ", area = calcularAreaRectaguo(5, 10));
function esMayor_o_esMenor(edad){
    if(edad >= 18) {
        console.log("es mayor de edad")
    } else {
        console.log("es menor de edad")
    }
}
esMayor_o_esMenor(20);
esMayor_o_esMenor(12);

function suma (){
    let a = parseInt(prompt("ingrese el 1er numero a sumar:"));
    let b = parseInt(prompt("ingrese el 2do numero a sumar:"));
    return a + b; // devuelve la suma con los numeros ingresados por el usuario
}
document.writeln("el resultado de la suma es: " , suma(), "<br>");

function vercolor(){
    valor = parseInt(prompt("porfavor ingrese numeros entre 1 y 3 para activar el semaforo..."));
    switch(valor){
        case 1:
            return "perfecto has elegido el color: rojo";
            case 2:
                return "perfecto has elegido el color: verde";
                case 3: 
                return "perfecto has elegido el color: amarillo";
                default:
                    return "no ha ingresado un valor valido";
            }
}
document.writeln(vercolor());