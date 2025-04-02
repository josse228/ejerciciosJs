/* Ejercicio n2 */

let odd = [];

function mudulus(a,b){
    let result = a % b 
    return result
}

for ( let i = 1 ; i <= 50; i++){ 

    let remainder = mudulus(i,2);

    if ( remainder == 0) {
    odd.push(i)
    }
}

console.log(odd)