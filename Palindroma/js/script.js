
var richiesta = prompt("Inserisci una parola.");


//assegno funzione a un var per stamparlo su HTML
var funzione = isPalindroma(richiesta);

document.getElementById('output').innerHTML = funzione;



//correzione funzione
function isPalindroma(str){
  var reverse= "";
  //codice per girare la stringa e slavarla dentro reverse
  for(var i = str.length - 1; i >= 0; i--){
    reverse += str[i];
  }
  //controllo se la prola al contrario e' uguale all'originale
  if(str == reverse){
    return true
  }else{
    return false
  }
}