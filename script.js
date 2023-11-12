// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va scritto in pagina in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.



// quanti km vuoi percorrere?  userKmRequest
// quanti anni hai?            userAge

let userKmRequest = parseInt (prompt('How many Km are you going to travel?'));
let userAge = parseInt (prompt('How old are you?'));

//  STEP_1  verfica se è un numero +  quanto costa il viaggio in € in base a 'userKmRequest'?

if (!isNaN(userKmRequest) && !isNaN(userAge)) {
    let ticketPrice = userKmRequest * 0.21;

    // STEP_2 sconto = calcola direttamente il risultato senza dover fare la sottrazione
    if (userAge < 18) {
        ticketPrice *= 0.8;
    }
    else if (userAge >= 65) {
        ticketPrice *= 0.6;
    }


// STEP_3 printing del risultato
    alert('Your ticket cost is: ' + ticketPrice.toFixed(2));
}  else {
    alert('Please enter valid numbers.');
}



document.getElementById('output').innerHTML = 'Ticket price: ' + ticketPrice;