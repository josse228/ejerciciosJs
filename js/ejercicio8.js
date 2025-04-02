let input = prompt("Ingrese un numero entero positivo");

if ( input <= 0){
    input = prompt("El numero debe ser positivo, por favor ingreselo nuevamente")
}
let invert = []

for ( let i = input.length - 1; i >= 0 ; i--){
    invert.push(input[i]);
}
console.log(invert.join(""))