// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va scritto in pagina in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.



quanti km vuoi percorrere?  userKmRequest
quanti anni hai?            userAge

IF (1 km = 0.21 €) {
    quanto costa il viaggio in € in base a 'userKmRequest'?
}

IF {
    (userAge < 18) then 'sconto del 20%'
} else {
    ( 18 =< userAge < 65 ) then 'no sconto, try next time :)'
} else {
    ( userAge > 65) then 'sconto del 40%'
}



