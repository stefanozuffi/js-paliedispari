//Funzione Palindromo

//Chiediamo all'utente una parola e salviamo il suo input nella variabile string
input_1 = prompt("Inserisci una parola:")

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
if (is_palindrome(input_1)) {
    console.log(`La parola selezionata è un palindromo`)
}
else {
    console.log(`La parola selezionata non è un palindromo`)
}




//----------------------------------------------------




// Gioco Pari o Dispari

//Chiediamo all'utente di scegliere pari o dispari
input_2 = prompt('Scegli pari o dispari:').toLowerCase()

console.log(`Hai scelto ${input_2}`)

//Poi di scegliere un numero e convertiamo la sua stringa di risposta in un numero:
user_num = Number(prompt("Scegli un numero da 1 a 5"))

//Definiamo una funzione per generare un numero tra 1 e 5
function gen_random(min,max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

computer_num = gen_random(1,5)
console.log(`Il computer ha scelto ${computer_num}`)

final_sum = user_num + computer_num
 
//Ora calcoliamo chi ha vinto, a seconda di input_2 e il valore di final_sum
function is_odd_or_even(num) {
    let res 
    if (num % 2 === 0) {
      res = 'pari'
    }
    else {
        res ='dispari'
    }
    return res
}

sum_type = is_odd_or_even(final_sum)
console.log(`La somma di ${user_num} e ${computer_num} fa ${final_sum}, che è ${sum_type}`)

//Annunciamo il risultato in console
let win 
if (sum_type === input_1) {
  win = 'User' 
}
else {
    win = 'Computer'
}

console.log(`The ${win} has won!`)








