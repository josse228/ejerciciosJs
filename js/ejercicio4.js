/* Ejercicio n4 */

let arr = [23, 45, 12, 67, 34, 89, 21]

let highestNumber = 0; 

for (element of arr){

    if ( element > highestNumber){
        highestNumber = element;
    }

}

console.log(highestNumber)