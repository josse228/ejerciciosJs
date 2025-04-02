/* Ejercicio n7 */

let number;
let result = 0

do {
    let input = prompt("Ingrese un numero entero");
    number = parseFloat(input)

    result+= number
    console.log(result)
}while (Number.isInteger(number) && result <= 100)





