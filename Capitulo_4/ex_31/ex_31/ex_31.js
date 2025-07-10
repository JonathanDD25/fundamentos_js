/*
JSON
Un archivo .json es como una hoja de apuntes ordenada donde se guardan los daots d emanera clara para que una persona o un programa los pueda leer, entendr y utilizar.

Ejemplo: Haga de cuenta que es como un cuaderno o libreta de notas donde usted escribe informacion importante de alguien como por ejemplo: su nombe, edad, dirección, teléfono y esta informacion la mantiene en el mismo formato y bien organizada para cuando used o alguien que quiera dicha informacion la necesite y pueda encontrarla facilmente. 

Ejemplo técnico: Entidad personas o directorio de personas.

{
    "nombre":"su nombre completo",
    "edad":"tiene 40 años",
    "direccion":"carrera 25# 38 - 65",
    "telefono":"3107406038",
    "email":"sucorreoelectronico@correo.com"
}

Ejemplo de un menú de archivo.json:

{
    "plato":"hamburguesa",
    "precio":22000,
    "ingredientes":["pan","lechuga","carne"],
    "disponible":true
}

*/

let persona = {
    "nombre":"Daniel",
    "edad":40,
    "aprendiz":"false",
    "residencia":{"direccion":"calle 34 # 31-20",
    "ciudad":"Palmira",
    "departamento":"Valle del Cauca"},
    "telefono":"3188688008"
}

let elementoTexto = document.getElementById('nombre');

elementoTexto.textContent = persona.nombre;



