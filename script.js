//Funzione Palindromo

//Chiediamo all'utente una parola e salviamo il suo input nella variabile string
const input_1 = prompt("Inserisci una parola o una frase:")

function is_palindrome(string) {
    //Vogliamo che la stringa in input venga invertita in inverse_string
    let inverse_string = ''
    for (let i = string.length - 1; i>=0; i--) {
      inverse_string += string[i]
    }
    //Poi return il confronto fra string e inverse string
    return inverse_string === string
}

//Annunciamo il risultato in console
function tell_result(x) {
    return is_palindrome(x) ? console.log(`La parola/frase selezionata è un palindromo`) : console.log(`La parola/frase selezionata non è un palindromo`)
}

tell_result(input_1)



//----------------------------------------------------




// Gioco Pari o Dispari

//Chiediamo all'utente di scegliere pari o dispari
function game() {
    let input_2 = prompt('Scegli pari o dispari:').toLowerCase()
    while (input_2.toLowerCase() !== 'pari' && input_2.toLowerCase() !== 'dispari') {
        input_2 = prompt('Scegli pari o dispari:').toLowerCase()
    }

    console.log(`Hai scelto ${input_2}`)


    //Poi di scegliere un numero e convertiamo la sua stringa di risposta in un numero:
    let user_num = Number(prompt("Scegli un numero da 1 a 5"))
    while (!(user_num <= 5 && user_num >= 1)) {
        user_num = Number(prompt("Scegli un numero da 1 a 5"))
    }

    console.log(`Hai scelto il numero: ${user_num}`)


    //Definiamo una funzione per generare un numero tra 1 e 5
    function gen_random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const computer_num = gen_random(1,5)
    console.log(`Il computer ha scelto ${computer_num}`)

    const final_sum = user_num + computer_num
    
    //Ora calcoliamo chi ha vinto, a seconda di input_2 e il valore di final_sum
    function is_odd_or_even(num) {
        return num % 2 == 0 ? 'pari' : 'dispari'
    }

    const sum_type = is_odd_or_even(final_sum)
    console.log(`La somma di ${user_num} e ${computer_num} fa ${final_sum}, che è ${sum_type}`)

    //Annunciamo il risultato in console 
    function det_winner() {
        return sum_type === input_2 ? 'User' : 'Computer'
    }
    const win = det_winner()

    console.log(`The ${win} has won!`)
}

game()







