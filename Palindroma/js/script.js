
var richiesta = prompt("Inserisci una parola.");

//funzione dove verifica la parola insierita dal prompt se corretta o sbagliata
function verrify(msg){
  if(msg != "palindroma"){    
    return "THE WORD IS INCORRECT."
  }else{
    return "THE WORD IS CORRECT"
  }

}
//assegno funzione a un var per stamparlo su HTML
var funzione = verrify(richiesta);

document.getElementById('output').innerHTML = funzione;
