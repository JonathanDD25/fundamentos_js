/* las funciones matematicas en javasript utilizando la clase  math,
Estas funciones permiteb realizar operciones dentro del codigo. */

var precio = Math.round(399.53); // se declara la variable con valor decimal la funcion round la vuelve entero
document.writeln("precio redondeado: ", precio, "<br>");
console.log("precio redondeado: ", precio);

var precio = Math.round(399.42);
document.writeln("precio redondeado: ", precio, "<br>");
console.log("precio redondeado: ", precio);

var precio = Math.ceil(299.83); // se declara la variable con valor decimal la funcion ceil la vuelve entero al mas cercano sin importar el decimal
document.writeln("precio redondeado: ", precio, "<br>");
console.log("precio redondeado: ", precio);

var precio = Math.ceil(399.28); 
document.writeln("precio redondeado: ", precio, "<br>");
console.log("precio redondeado: ", precio);

var precio = Math.floor(299.28); // se declara la variable con valor decimal la funcion floor la vuelve entero
document.writeln("precio redondeado: ", precio, "<br>");
console.log("precio redondeado: ", precio);

var precio = Math.floor(540.93); 
document.writeln("precio redondeado: ", precio, "<br>");
console.log("precio redondeado: ", precio);

var seno = Math.sin(45); // halla el seno de un angulo
document.writeln(" el valor de seno de un angulo de 45 es: ", seno, "<br>");
console.log("seno de 45: ", seno);

var coseno = Math.cos(50); // halla el coseno de un angulo
document.writeln(" el valor del coseno de un angulo de 50 es: ", coseno, "<br>");
console.log("coseno de 50: ", coseno);

var tangente = Math.tan(68); // halla la tangente de un angulo
document.writeln(" el valor tangente de un angulo de 68 es: ", tangente, "<br>");
console.log("tangente de 68: ", tangente);

var exponencial = Math.exp(2); // calcula el exponencial de un numero dado
document.writeln("exponencial de 2: ", exponencial, "<br>");
console.log("exponencial de 2: ",exponencial);

var exponente = Math.pow(4,2); // halla el exponente del numero dado
document.writeln("exponente de 4 elevado a la 3 es:  ", exponente, "<br>");
console.log("exponente de 4 elevado a la 2: ", exponente);

var logaritmo = Math.log(10); // hallar el logaritmo de un numero dado
document.writeln("el logaritmo de 10 es:  ", logaritmo, "<br>");
console.log("el logaritmo de 10 es: ", logaritmo);

var absoluto = Math.abs(-10); // calcular el valor absoluto de un numero
document.writeln("el valor absoluto de -10 es:  ", absoluto, "<br>");
console.log("el valor absoluto de -10 es: ", absoluto);

var raiz = Math.sqrt(81); // calcular la raiz cuadrada de un numero
document.writeln("la raiz cuadrada de 81 es:  ", raiz, "<br>");
console.log("la raiz cuadrada de 81 es: ", raiz);

var aleatorio = Math.random(); // rando  siempre va desde 0.0 hasta 0.99999...
document.writeln("el valor aleatorio random es:  ", aleatorio, "<br>");
console.log("el valor aleatorio random es: ", aleatorio);

// formula para realizar numeros random pero con rango y convertidos a entero.
var numRam = Math.floor(Math.random()*(15 - 5 + 1)+ 5);
document.writeln("el valor aleatorio entre 5 y 15 es:  ", numRam, "<br>");
console.log("el valor aleatorio entre 15 y 5 es: ", numRam);
/* Para este caso a traves de este esquema de fórmula sucede lo siguiente:
Math.floor(Math.random() * (Max - Min + 1) + Min);

1. Math.random()genera un número decimal entre 0y 1(incluye 0, pero nunca 1). Puede generar valores como 0.0, 0.5, 0.9999999, pero nunca exactamente 1.

2. Se multiplica el random generado por (Max - Min + 1), lo que da el tamaño del rango de números posibles. En este caso: 15 - 5 + 1 = 11, lo que significa que Math.random()se escalará a un valor entre 0 y 10.9999999.

3. Se suma Min para desplazar el rango. Antes de sumar Min, los valores estan entre 0y 10.9999999. Posteriormente, al sumar 5, ahora los valores estarán entre 5y 15.9999999. 

4. Math.floor()redondea hacia abajo para asegurar de obtener solo números enteros. Sin Math.floor(), se obtendrían decimales. Con Math.floor(), cualquier valor entre 5.000000 y 5.999999 se convierte en 5, entre 6.000000 y 6.999999 se convierte en 6, y así sucesivamente hasta 15. 

5. El + 1 en (Max - Min + 1) se utiliza para incluir el límite superior (Max). Sin el + 1, Math.random() solo podría generar números hasta Max - 1. El + 1 permite que Math.random() * (Max - Min + 1) llegue hasta Max, garantizando que Max sea una posibilidad al hacer Math.floor().

Ejemplo:

Si Math.random() genera 0.999999, el cálculo es: 
Math.floor(0.999999 * (15 - 5 + 1) + 5);
1. 0.999999 * 11 = 10.99999
2. 10.99999 + 5 = 15.99999
3. Math.floor(15.99999) = 15
Esto confirma que 15 puede ser generado.

Si Math.random()se genera 0, el cálculo es:
Math.floor(0 * (15 - 5 + 1) + 5);
1. 0 * 11 = 0
2. 0 + 5 = 5
3. Math.floor(5) = 5
Esto confirma que 5 puede ser generado.
*/