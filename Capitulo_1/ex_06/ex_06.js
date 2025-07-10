/* operadores */

// operadores de asignacion

let a = 1;

document.writeln("el valor de a = ", a);
document. writeln("<br>"); // se crea la etiqueta <br> desde el javascript como elemento html para hacer saltos de paginacion.
console.log("el valor de a = ", a);

a++; // el operador ++ aumenta o incrementa el valor en uno.
document.writeln("el valor de a = ", a);
console.log("el valor de a = ", a);
document. writeln("<br>"); 

a+=5; // el operador += incrementa el valor de la variable dependiendo del valor que se ponga luego del igual.
document.writeln("el valor de a = ", a);
console.log("el valor de a = ", a);
document. writeln("<br>");

a--; // el operador -- decrementa el valor en uno.
document.writeln("el valor de a = ", a, "<br>");
console.log("el valor de a = ", a);

a-=2; // el operador -= resta el valor de la variable dependiendo del valor que se ponga luego del igual.
document.writeln("el valor de a = ", a, "<br>");
console.log("el valor de a = ", a);

a*=2; // el operador *= multiplica el valor de la variable dependiendo del valor que se quiera multiplicar.
document.writeln("el valor de a = ", a, "<br>");
console.log("el valor de a = ", a);

a/=4; // el operador  /= divide el valor de la variable  dependiendo del valor que se quiera dividir
document.writeln("el valor de a = ", a, "<br>");
console.log("el valor de a = ", a);

a**=3; // el operador **= potencia el valor de la variable dependiendo del valor que se digite a potenciar
document.writeln("el valor de a = ", a, "<br>");
console.log("el valor de a = ", a);

// operadores de comparacion

// los operdores de comparacion sirven para comparar cantidades o valores entre variables.
/*
= es el operador de asignacion
> es el operador mayor que
< es el operador menor que
== es el operador igual que
!= es el operador diferente de
>= es el operador mayor o igual que
<= es el operador menor o igual que
*/

let valorUno, valorDos; // se declaran las variables
// utilidad del operador de asignacion
valorUno=20; //se inicializa la variable con un valor de tipo entero
valorDos=10; //se inicializa la variable con un valor de tipo entero

// operador mayor que >
document.writeln(valorUno > valorDos);
console.log(valorUno > valorDos);
// el sistema verificara si la variable uno es mayor que la dos y volvera un resultado booleano es decir: falso o verdadero (true or false)

// operador menor que <
document.writeln(valorUno < valorDos);
console.log(valorUno < valorDos);
// el sistema verificara si la variable uno es menor que la dos y volvera un resultado booleano es decir: falso o verdadero (true or false)

// operador igual que ==
document.writeln(valorUno == valorDos);
console.log(valorUno == valorDos);
// el sistema verificara si la variable uno es igual que la dos y volvera un resultado booleano es decir: falso o verdadero (true or false)

// operador diferente de !=
document.writeln(valorUno != valorDos);
console.log(valorUno != valorDos);
// el sistema verificara si la variable uno es diferente que la dos y volvera un resultado booleano es decir: falso o verdadero (true or false)

// operador mayor o igual >=
document.writeln(valorUno >= valorDos);
console.log(valorUno >= valorDos);
// el sistema verificara si la variable uno es mayor o igual que la dos y volvera un resultado booleano es decir: falso o verdadero (true or false)

//operador menor o igual <=
document.writeln(valorUno <= valorDos);
console.log(valorUno <= valorDos);
// el sistema verificara si la variable uno es menor o igual que la dos y volvera un resultado booleano es decir: falso o verdadero (true or false)