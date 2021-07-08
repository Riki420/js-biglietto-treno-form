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

/!**************************************************************************************************************************************************/


//* VARIABILI DEL FORM

var nameField = document.getElementById('name');
var kmField = document.getElementById('km');
var ageField = document.getElementById('age');
var button = document.getElementById('gen-ticket');

//* VARIABILI DEL TICKET

var nameElement = document.getElementById('name');
var kmElement = document.getElementById('km');
var ageElement = document.getElementById('age');
var wagonElement = document.getElementById('wagon');
var trainNumElement = document.getElementById('train-num');
var priceElement = document.getElementById('price');