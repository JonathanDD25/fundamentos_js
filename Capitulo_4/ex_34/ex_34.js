/* Promesas solicitudes y respuestas

Teoria
Peticiones:

GET. se utiliza para obtener informacion de un servidor
POST. se utiliza para enviar la informacion al servidor
PUT. se 

400 mal solicitado
401 no autorizado
Resumen:
Las promesas y las solicitudes http son muy importantes en javascript para poder manejar la asincronia y la comunicacion con servidores externos y con ellos se pueden crear aplicaciones dinamicas responsivas que pueden actualizarse y cambien en tiempo real sin bloquear la ejecucion del resto de las aplicaciones.

catch: la funcionalidad catch es un metodo que se utiliza en promesas para manejar posibles errores, es una forma de atrapar a cualquier error que ocurra en el codigo dentro de una promesa y realizar una accion especifica en caso de que ocurra dicho error. */

// let datosJson;
// fetch(`/ex_32/biblioteca.json`)
//     .then(res => res.json())  
//     .then((salida) => {  
//         datosJson = salida;  
//         let elementoTexto = document.getElementById('titulo');  
//         elementoTexto.textContent = datosJson.biblioteca[0].titulo;  
//     })  
//     .catch(function(error){alert(error);}); */



let datosJson;
fetch (`/ex_32/biblioteca.json`)
    .then(res => res.json())
    .then((salida) => {
        const contenedor = document.getElementById('contenedor');
        salida.biblioteca.forEach((libro, index) => {
            const divLibro = document.createElement('div');
            divLibro.innerHTML = `
                <h3>Libro ${index + 1}</h3>
                <p><strong>Título:</strong> ${libro.titulo || 'No definido'}</p>
                <p><strong>Editorial:</strong> ${libro.editorial || 'No definido'}</p>
                <p><strong>Edición:</strong> ${libro.edicion || 'No definida'}</p>
                <p><strong>ISBN:</strong> ${libro.isbn || 'No definido'}</p>
                <p><strong>Autor principal:</strong> ${libro.autores["autor principal"] || 'No definido'}</p>
                <p><strong>Código SENA:</strong> ${(libro["codigo sena"] || []).join(', ') || 'No definido'}</p>
                <p><strong>Descripción:</strong> ${libro.descripcion || 'No definida'}</p>
                <hr>
            `;
            contenedor.appendChild(divLibro);
        });
    })
    .catch(error => alert("Error: " + error));