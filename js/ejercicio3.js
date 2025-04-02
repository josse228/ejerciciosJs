/* Ejercicio n3 */
let number = Number.parseFloat(prompt("Ingrese un numero del 1 al 100"));

if ( number >= 1 && number <= 100) {

    for ( let i = 0 ; i <= 10 ; i++){
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`)
    }
}
else {
    alert("El numero ingresado no fue el indicado, vuelva a intentarlo")
}
