/* Acceder a archivos JSON con Fetch*/
let datosJson;
fetch(`/ex_32/biblioteca.json`) /*Ruta donde se encuentra ubicado el archivo*/
.then(res => res.json()) /*La funcion then son promesas que se van a ejecutar automaticamente una vez que la promesa se haya resuelto exitosamente (200). es decir, que se ejecutara cuando reciba la respuesta*/
.then((salida) => {
    /*Esta funcion se va a ejecutar una vez que la primera promesam se haya resuelto*/
    datosJson = salida; /* se almacena en la variable el objeto JSON parseado para mostrarlo */
    let elementoTexto = document.getElementById("titulo"); /* se obtiene del id del HTML*/
    elementoTexto.textContent = datosJson.biblioteca[0].titulo; /* se muestra lo que se necesita del objeto JSON */
})
