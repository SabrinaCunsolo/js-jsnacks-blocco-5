// JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

$(document).ready(function() {
    // array con i nomi
    var nomi = ['Maria', 'Luca', 'Laura', 'Alice', 'Marco', 'Anna', 'Carlo', 'Luigi', 'Silvia', 'Sara'];


    // Chiedo due volte all'utente un numero tra 0 e 10
    var numero1 = parseInt(prompt('Inserisci un numero tra 0 e 10'));
    var numero2 = parseInt(prompt('Inserisci un altro numero tra 0 e 10'));

    // creo array vuoto dove pushare i nomi
    var nomiTrovati = [];

    // ciclo
    for (var i = 0; i < nomi.length; i++) {
        if ((i >= numero1) && (i <= numero2)) {
            console.log(nomi[i]);
            nomiTrovati.push(nomi[i]);
        }
    }

    console.log(nomiTrovati);

});
