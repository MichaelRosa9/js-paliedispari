//domanda pari o dispari
var pari_dispari = prompt("Scegli tra pari o dispari.");
while(pari_dispari != "pari" && pari_dispari != "dispari"){
  alert("Il valore messo non e' corretto.");
  var pari_dispari = prompt("Scegli tra pari o dispari.");
}

//domanda numero da 1 a 5
var player_num = parseInt(prompt("Ineserisci un numero da 1 a 5."));
/* while(inserisci_num >= 5){
  alert("Il valore messo non e' corretto.");
  var inserisci_num = prompt("Ineserisci un numero da 1 a 5.");
  if(isNaN(inserisci_num)){
    alert("Il valore messo non e' corretto.");
    var inserisci_num = prompt("Ineserisci un numero da 1 a 5.");

  } 
} */


/* if(inserisci_num = 0 && inserisci_num > 5){
  var resend = prompt("Il valore messo non e' valido come numero. Inserisci un numero da 1 a 5.")
} */

var npc = random_generator();
var somma = addition(player_num, npc);
console.log(somma)
var risultato = '';
if(pari_dispari = "pari" && somma%2 == 0){
  risultato = "Hai vinto!"
}else if(pari_dispari = "dispari" && somma%2 != 0){
  risultato = "Hai vinto!"
}else{
  risultato = "Hai perso!"
}

//funzione che genera un numero random da 1 a 5
function random_generator(num){  
  return Math.floor((Math.random() * 5) + 1);
}

function addition(n1, n2){
  return n1 + n2;
}

document.getElementById('output').innerHTML = "Il numero che avevi scelto è " + player_num + "." + "Il numero del computer era " + npc + "." + "La somma dei due nummeri é " + somma + "." + risultato;


