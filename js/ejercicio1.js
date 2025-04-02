/* Ejercicio n1 */

let arr = [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9];

let positives = []

for ( element of arr) {
    if (element>0){
        positives.push(element)
    }
}
console.log(positives)