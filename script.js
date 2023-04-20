var numeroSecreto= parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute)
  if (chute == numeroSecreto){
    elementoResultado.innerHTML = "Aeee, você acertou!"
    } else if (chute > 10 || chute < 0){
     elementoResultado.innerHTML = "Ei, você deve digitar um número de 0 a 10. Tente novamente!"; 
    }
  else{
     elementoResultado.innerHTML = "Xiii, você errou";
  }
}