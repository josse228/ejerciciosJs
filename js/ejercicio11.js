/* Ejercicio n°10 */

let word = prompt("Ingresa una sola palabra")
let vocals = ["a", "e", "i", "o", "u"];
let numbersOfVocals = 0; 

function vocalIteration(letter) {
    for (let i = 0; i < vocals.length; i++) { 
            if (letter.toLowerCase() === vocals[i]) {
            return 1
            }
        }
    return 0
}

if (word) {
    let totalVocals = 0;
    for (let i = 0; i < word.length; i++) { 
    totalVocals += vocalIteration(word[i]);
    }
    console.log(`Esta palabra tiene ${totalVocals} vocales`);
} else {
    alert("No ingresó ningun valor, vuelva a intentarlo")
}
