// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// utente sceglie pari o dispari con un prompt 

// utente scrive un numero da  1 a 5 con un prompt 

// creare funzione che genera un numero random da 1 a 5 

// poi sommare il numero random con il numero scleto dall'utente 

//   creare funzione che stabilisce se il risulto della somma è pari o dispari si decreta il vincitore in base alla scelta dell'utente di pari o dispari 

const userEvenorOdd = prompt('Pari o Dispari ? scegli');
console.log(userEvenorOdd)

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5 !'));
console.log(userNumber)

const randomNumberSoftware = getRndInteger(1,5)
console.log(randomNumberSoftware)

let Result = numberSum(userNumber,randomNumberSoftware);
console.log(Result)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function numberSum ( numberUser,NumberSoftware){
       const sum = numberUser + NumberSoftware ;
       return sum ;
  }