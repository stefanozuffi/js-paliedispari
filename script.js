//Funzione Palindromo
function is_palindrome() {
    //Chiediamo all'utente una parola e salviamo il suo input nella variabile string
    string = prompt("Inserisci una parola:")
    //Vogliamo che la stringa in input venga invertita in inverse_string
    let inverse_string = ''
    for (let i = string.length - 1; i>=0; i--) {
      inverse_string += string[i]
    }
    //Poi return il confronto fra string e inverse string
    return inverse_string === string
}

console.log(is_palindrome())
