// Acceder al archivo JSON
let datosJSON;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'personas.json', true); // O usa 'ex_31.json' si prefieres ese archivo
xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status === 200) {
        datosJSON = xhr.response;

        document.getElementById('nombre').textContent = datosJSON.persona.nombre;
        document.getElementById('edad').textContent = datosJSON.persona.edad;
        document.getElementById('aprendiz').textContent = datosJSON.persona.aprendiz;
        document.getElementById('direccion').textContent = datosJSON.persona.residencia.direccion;
        document.getElementById('ciudad').textContent = datosJSON.persona.residencia.ciudad;
        document.getElementById('departamento').textContent = datosJSON.persona.residencia.departamento;
        document.getElementById('telefono').textContent = datosJSON.persona.telefono;

        console.log(datosJSON);
    } else {
        console.error('Error al cargar el archivo JSON', xhr.status);
    }
}

xhr.send();