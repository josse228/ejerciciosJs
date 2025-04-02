/* Ejercicio n6 */

function indentifier(a,b){
    let result = a % b;
    return result;
}

for ( i = 1 ; i <= 50 ; i++){

    let dividableBy3 = indentifier(i,3);
    let dividableBy5 = indentifier(i,5);

    if ( dividableBy3 == 0 && dividableBy5 == 0) {
    console.log(`Este numero "${i}" es un FizzBuzz`)
    } 
    else if ( dividableBy3 == 0 ){
    console.log(`Este numero "${i}" es un Fizz`)
    } 
    else if ( dividableBy5 == 0 ){
    console.log(`Este numero "${i}" es un Buzz`)
    } 
    else {
    console.log(`Este numero "${i}" no es ni un Fizz ni un Buzz`)
    }
}