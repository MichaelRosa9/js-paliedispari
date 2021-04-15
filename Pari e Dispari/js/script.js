//domanda pari o dispari
var pari_dispari = prompt("Scegli tra pari o dispari.");
while(pari_dispari != "pari" && pari_dispari != "dispari"){
  alert("Il valore messo non e' corretto.");
  var pari_dispari = prompt("Scegli tra pari o dispari.");
}

//domanda numero da 1 a 5

/* if(player_num == 0 || player_num > 5 || isNaN(player_num)){
  alert("Il valore messo non e' corretto.");
  player_num = parseInt(prompt("Ineserisci un numero da 1 a 5."));
}else if(){
  alert("Il valore messo non e' corretto.");
  player_num = parseInt(prompt("Ineserisci un numero da 1 a 5."));
}else if(isNaN(player_num)){
  alert("Il valore messo non e' corretto.");
  player_num = parseInt(prompt("Ineserisci un numero da 1 a 5."));
} */

var input_number = false;
while(input_number === false){
  var player_num = parseInt(prompt("Ineserisci un numero da 1 a 5."));
  if(player_num < 1){
    
    alert("Il valore messo non e' corretto.");
    input_number === false
  }else if(player_num > 5){
    
    alert("Il valore messo non e' corretto.");
    input_number === false
  }else if(isNaN(player_num)){
    
    alert("Il valore messo non e' corretto.");
    input_number === false
  }else{
    input_number = true
  }
  
}



var risultato = '';
if(pari_dispari = "pari" && somma%2 == 0){
  risultato = "Hai vinto!"
}else if(pari_dispari = "dispari" && somma%2 != 0){
  risultato = "Hai vinto!"
}else{
  risultato = "Hai perso!"
}

//npc
var npc = random_generator();
var somma = addition(player_num, npc);


//funzione che genera un numero random da 1 a 5
function random_generator(num){  
  return Math.floor((Math.random() * 5) + 1);
}

function addition(n1, n2){
  return n1 + n2;
}

document.getElementById('output').innerHTML = "Il numero che avevi scelto è " + player_num + ". " + "Il numero del computer era " + npc + ". " + "La somma dei due nummeri é " + somma + ". " + risultato;


