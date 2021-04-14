var richiesta = prompt("Inserisci una parola.");


function vrrify(msg){
  
  if(msg != "palindroma"){
    return "THE WORD IS INCORRECT."
  }else{
    return "THE WORD IS CORRECT"
  }

}

vrrify(richiesta);