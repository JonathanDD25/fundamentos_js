let e, f, suma, resta, mult, divide, potencia, areatriangulo;

e = parseFloat(prompt("ingrese el valor de e: "));
f = parseFloat(prompt("ingrese el valor de f: "));

suma = e + f;
resta = e - f;
mult = e * f;
divide = e / f;
potencia = e ** f;
areatriangulo = (e * f) / 2;

console.log("el resultado de la suma es: ", suma);
console.log("el resultado de la resta es: ", resta);
console.log("el resultado de la multiplicacion es: ", mult);
console.log("el resultado de la dividicion es: ", divide);
console.log("el resultado de la potencia es: ", potencia);
console.log(
  "el resultado del calculo del area de un triangulo es: ",
  areatriangulo
);
