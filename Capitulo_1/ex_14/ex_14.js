// ejercicio de analisis: pedir a un usuario que digite algun tipo de valor
let a = 1;
let suma = 0;
let valor;

while(a <= 4){
    valor = parseInt(prompt("ingrese cuatro valores numericos para sumarse"));
    suma= suma + valor;
    a++;
}
document.writeln("la suma es: ", suma, "<br>");


// Rifa 
let numero;
do{
    numero = parseInt(prompt("¡Rifa! digita un numero entre el 1 y el 15"));

    if(numero !=5){
        document.writeln("usted le dio al numero: ", numero, "<br>");
    } else{
        document.writeln("¡Genial! has ganado, el numero correcto era: ", numero , " reclama tu premio")
    }
} while (numero !=5);