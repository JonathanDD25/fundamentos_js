// operadores matematicos

let a, b; // aqui va a dar un error 
let c, d; // aqui las operaciones van a dar el resultado real
let suma, resta, mult, div, residuo, potencia; // variables para obtener los resultados de los operandos
// obtener los datos ingresados por el usuario
a = prompt("ingrese un numero: ");
b = prompt("ingrese otro numero: ");

// resultados de las operaciones
 suma= a + b; // aqui la operacion no se da pues de concatenan los valores por el operando +
resta = a - b;
 mult = a * b;
div = a / b;
residuo = a % b;
 potencia = a ** b;

// imprimir los resultados
document.writeln("resultados de la operacion a + b sin convertir valores", "<br>",
"la suma es: ", suma, "<br>",
"la resta es: ", resta, "<br>",
"la multiplicacion es: ", mult, "<br>",
"la division es: ", div, "<br>",
"el residuo es: ", residuo, "<br>",
"la potencia es: ", potencia, "<br>",
);
document.writeln("<br>") // salto de linea

// segunda operacion
// para que los operaciones numericas se pueda dar correctamente se deben convertir los datos ingresados con parseInt y parseFloat.

//obtener los datos ingresados por el usuadio pero ya parseados
c = parseInt(prompt("ingrese un numero: "));
d = parseFloat(prompt("ingrese otro numero: "));

// los resultados del segundo bloque de las operaciones es:
suma= c + d; 
resta = c - d;
mult = c * d;
div = c / d;
residuo = c % d;
potencia = c ** d;


document.writeln("resultados de la operacion c + d convirtiendo los valores", "<br>",
    "la suma es: ", suma, "<br>",
    "la resta es: ", resta, "<br>",
    "la multiplicacion es: ", mult, "<br>",
    "la division es: ", div, "<br>",
    "el residuo es: ", residuo, "<br>",
    "la potencia es: ", potencia, "<br>",
);

