// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va scritto in pagina in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.



// quanti km vuoi percorrere?  userKmRequest
// quanti anni hai?            userAge

// IF (1 km = 0.21 €) {
//     quanto costa il viaggio in € in base a 'userKmRequest'?
// }

// apply discount
// X -> number (=userAge)

// // if (X < 18) then apply 20% 
//     -> come si fa il 20% di sconto?{
//         let 20% = parseInt(prompt( X * 0.2));
//     }

// // }else {
// // if ( 18 <= X < 65 ) then apply 'none' -> il prezzo rimane uguale
// // }else {
// //     (X > 65) then apply 40%
//     -> come si fa il 40% di sconto?{
//     let 40% = parseInt(prompt( X * 0.4));
// }

// IF {
//     (userAge < 18) then 'sconto del 20%'
// } else {
//     ( 18 <= userAge < 65 ) then 'no sconto, try next time :)'
// } else {
//     ( userAge > 65) then 'sconto del 40%'
// }

let userKmRequest = parseInt (prompt('How many Km are you going to travel?'));
let userAge = parseInt (prompt('How old are you?'));










document.getElementById('output').innerHTML = 'Ticket price: ' + ticketPrice;