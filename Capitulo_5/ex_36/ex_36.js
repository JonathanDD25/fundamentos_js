async function obtenerDatos() {
    try {
        const resUsuarios = await fetch ('https://fakestoreapi.com/users');
        const usuarios = await resUsuarios  .json();
        console.log("Usuarios:", usuarios);

        const resProductos = await fetch ('https://fakestoreapi.com/users');
        const productos = await resProductos.json();
        console.log("Productos:", productos);

        const resCarritos = await fetch ('https://fakestoreapi.com/users');
        const carritos = await resCarritos.json();
        console.log("Carritos:", carritos);

        if (usuarios.lenght > 0 && productos.lenght >0 && carritos.lenght > 0) {
            console.log("Todos los datos se han obtenido correctamente.");
            const primerUsuario = usuarios[0];
            const carritoUsuario = carritos.find(carrito => carrito.userId === primerUsuario.id);
            console.log("Primer usuario:", primerUsuario);
            console.log(`\n El Usuario ${primerUsuario.name.firstname} tiene el carrito con ID: ${carritoUsuario.id}`);
            console.log("Contenido del carrito:", carritoUsuario.products);
        }
    } catch (error) {
        console.error("error al obtener los datos:", error);
    }
}
obtenerDatos();