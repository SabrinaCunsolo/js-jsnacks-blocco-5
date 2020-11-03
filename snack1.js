// JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

$(document).ready(function() {

    // creo array di oggetti con le bici e proprietà
    var biciDaCorsa = [
        {
            nome : 'Wilier',
            peso : 3,
        },
        {
            nome : 'Vektor',
            peso : 5,
        },
        {
            nome : 'Atlas',
            peso : 7,
        },
    ];

    var min = biciDaCorsa[0].peso;

    var nomeBici;

    // creo ciclo for per scorrere array, devo verificare peso delle bici
    for (var i = 0; i < biciDaCorsa.length; i++) {

        var bici_corrente = biciDaCorsa[i];

        var peso = bici_corrente['peso'];

        var nome_corrente = bici_corrente['nome'];

        // se il peso che ha trovato è minore devo modificare il valore
        if (peso < min) {
            min = peso;
            nomeBici = nome_corrente;
        }
    }

    $('p').text('La bici con peso minore è' + nomeBici);

    console.log(min);
    console.log(nomeBici);
});
