// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!
// Consigli del giorno

// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// chiedere con un prompt una parola 

// creare una Funzione che 
// scorre l'array di una parola 
// poi se la parola è uguale sia 
// dal primo verso che dal secondo 


let userWord = prompt('Inserisci una parola');
console.log('hai scritto:',userWord)
const wordResult = wordRevert(userWord);
console.log('il risultato inverso è:', wordResult)

const resultWord = calculatorWordPalindrom(wordResult);
console.log('questa parola :' + ' ' + resultWord)

function wordRevert(word){

 
    // for ( let i = 0 ; i < userWord.length ; i++){
    //     console.log(userWord[i])};
    
    let revertWord = '';
    for ( let i = userWord.length - 1 ; i >= 0 ; i--){
        const thisRevertWord = userWord[i];
        revertWord += thisRevertWord;
    };
    return revertWord ;
}

function calculatorWordPalindrom(reverword){
    let message ;
    if ( wordResult === userWord){
          message = ' è palindroma'

    }else{
        message = ' non è palindroma'
    }
    return message;
}