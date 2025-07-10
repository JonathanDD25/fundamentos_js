// pedir datos a un usuario (como ejercicio pues cuando se piden datos se utilizan inputs).

let nombre, edad, direccion, movil, email; // se pueden generar tantas variables como se necesiten con una declaracion let.
// prompt es una palabra reservada que despliega una funcion y sale un mensaje de tipo alert para pedir datos.

nombre = prompt ("escriba su nombre"); // se piden los datos al usuario
document.writeln("su nombre es: ", nombre, "<br>"); // se imprimen los datos proporcionados por el usuario

edad = prompt("digite su edad: "); // se piden los datos al usuario
document.writeln("tu edad es: ", edad, "<br>"); // se imprimen los datos proporcionados por el usuario

direccion = prompt("escriba su direccion"); // se piden los datos al usuario
document.writeln("vives en: ", direccion, "<br>"); // se imprimen los datos proporcionados por el usuario

movil = prompt("escriba su movil: "); // se piden los datos al usuario
document.writeln("tu numero movil: ", movil, "<br>"); // se imprimen los datos proporcionados por el usuario

email= prompt("escriba su email: "); // se piden los datos al usuario
document.writeln("tu email es: ", email, "<br>"); // se imprimen los datos proporcionados por el usuario
// para imprimir en consola tenemos varias formas de hacerlo
console.log("su nombre es: ", nombre, "<br>");
console.log("tu edad es: ", edad, "<br>");
console.log("vives en: ", direccion, "<br>");
console.log("tu numero movil: ", movil, "<br>");
console.log("tu email es: ", email, "<br>");
//
console.log("su nombre es: ",nombre, "<br>",edad, "<br>",direccion, "<br>",movil, "<br>",email, "<br>")

console.log("tu nombre es: ",nombre, edad, direccion, movil, email);