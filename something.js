//old shit
let message = '';
function checkGame(finalScore) { //makes sense and done
  if (finalScore < 4) {
    message = "Has sido muy conservador";
  }
  if (finalScore <= 5) {
    message = "Te ha entrado el canguelo eh?";
  }
  if (finalScore <= 7) {
    message = "Casi casi...";
  }
  if (finalScore === 7.5) {
    winGame()
  }
  if (finalScore > 7.5) {
    gameOver()
  } 
  else {
    message = "Puntuacion no reconocida";
  }
  document.getElementById("score").innerHTML = `Your final score is ${currentScore}. ${message}`;
};

function winGame() {
    document.getElementById("score").innerHTML = "¡Lo has clavado! ¡Enhorabuena!"
    // mostrar el mensaje de hemos ganado la partida
    // y bloquear los botones
    document.getElementById("hitMe").disabled = true;
    document.getElementById("stick").disabled = true;
  };
  
  function gameOver() {
    document.getElementById("score").innerHTML = "Game Over, better luck next time!"
    document.getElementById("hitMe").disabled = true;
    document.getElementById("stick").disabled = true;
    // mostrar el mensaje de hemos perdido la partida
    // y bloquear los botones
  };