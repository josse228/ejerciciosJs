/* Ejercicio n12 */
let number = Math.ceil((Math.random() * 10));
console.log(number)

do {
    let inputNumber = Number.parseFloat(prompt("Ingrese un numero"));

    if ( number === inputNumber) {
        console.log("Felicitaciones, adivinaste el numero!")
        break;
    }
    else if ( number < inputNumber ){
        console.log("El numero que elegiste es mayor al numero correcto")
        break;
    }
    else if ( number > inputNumber ){
        console.log("El numero que elegiste es menor al numero correcto")
        break;
    }
} while ( Number.isInteger(inputNumber))
