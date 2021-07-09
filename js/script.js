 /*
 Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km (0.21 € al km)
 va applicato uno sconto del 20% per i minorenni
 va applicato uno sconto del 40% per gli over 65.
 L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//* Prendo le informazioni dall'utente e con un bottone faccio fare i calcoli allo script dando il risultato sullo schermo

//*1 Prendo le informazioni
//*2 Calcolo del prezzo a seconda dei km scelti
//*3 A seconda dell'età genero lo sconto del 40 o 20 %
//*4 Calcolo del prezzo finale arrotondandolo con due decimali
//*5 Stampo i dati inseriti dall'utente dentro i propri spazi

/**************************************************************************************************************************************************/


//* VARIABILI DEL FORM

var nameField = document.getElementById('name');
var kmField = document.getElementById('km');
var ageField = document.getElementById('age');
var button = document.getElementById('gen-ticket');
var resetButton = document.getElementById('reset');

//* VARIABILI DEL TICKET

var ticketSection = document.getElementById('ticket-sctn');
var nameElement = document.getElementById('name-place');
var discountElement = document.getElementById('discount')
var wagonElement = document.getElementById('wagon');
var trainNumElement = document.getElementById('train-num');
var priceElement = document.getElementById('price');

//* FACCIAMO FUNZIONARE QUEL BOTTONE

button.addEventListener('click', function () {
    
    //recupero dei valori
    var nameValue = nameField.value;
    console.log(nameValue);

    var kmValue = kmField.value;
    console.log(kmValue);

    var ageValue = ageField.value;
    console.log(ageValue);

    //calcolo del biglietto
    var price = 0.21 * kmValue;
    var discountDisplay = 'Tariffa Ordinaria';

    //! verifica dell'età
    if (ageValue === 'min') {
        price *= 0.6;
        discountDisplay = 'Tariffa Minorenni'
        
      } 
    
      if (ageValue === 'over65'){
        price *= 0.8;
        discountDisplay = 'Tariffa Over'
       
      }

      //arrotonadamento decimali

      price = 'Euro' + price.toFixed(2);


      //finta carrozza

      var wagonNum = Math.floor(Math.round() * 12) + 1;
      console.log('vagone: ' + wagonNum);
      
      //*STAMPA ELEMENTI

      nameElement.innerHTML =  nameValue;
      discountElement.innerHTML = discountDisplay;
      priceElement.innerHTML = price;
      trainNumElement.innerHTML = '85367'; 
      wagonElement.innerHTML = wagonNum;

});

//* BOTTONE RESET

resetButton.addEventListener('click', function(){
    nameField.value = '';
    kmField.value = '5';
    ageField.value = 'maj';

    nameElement.innerHTML = '';
    discountElement.innerHTML = '';
    wagonElement.innerHTML = '';
    trainNumElement.innerHTML = '';
    priceElement.innerHTML = '';


});


//* DROPDOWN MENU NAVBAR

var dropDown = document.getElementById('drop-menu');

function changeClass(){
    dropDown.classList.add('show');
}


