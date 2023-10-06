// antonio part

let currentScore = 0;

const showScore = () => {
  document.getElementById("score").innerHTML = `Your score is ${currentScore}`;
};

function giveUrlCard(card) {
  switch (card) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"; 
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";  
  };
};

function printUrlImage(card) { // all good here
  const imgElement = document.getElementById("startCard");
  if (imgElement !== null && imgElement !== undefined) {
    const urlImage = giveUrlCard(card);
    imgElement.src = urlImage.src;
  }
};

function givePointCard(card) { //makes sense
  return card < 8 ? card : 0.5 //he cambiado 7 por 8 
};

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

const giveRandomNumber = () => {
  let randomNumber = Math.ceil(Math.random() * 10); 
  if (randomNumber > 7) {
    randomNumber = randomNumber + 2;
  }
  return randomNumber; 
};

function hitMe() {

  showScore();
  
  const randomNumber = giveRandomNumber(); //makes random number and stores it
 
  const card = giveUrlCard(randomNumber); //puts randomnumber through fx and returns a card

  printUrlImage(card); //prints the card to the html

  const point = givePointCard(randomNumber); //this gives VALUE of the cards
    // según la carta, ver que puntos le corresponden según la lógica que nos diga el enunciado (si la carta es menor a 7 los puntos son el valor de la carta y si es mayor a 7 los puntos son 0.5)

  // sumar el punto obtenido anteriormente a los puntos totales que tengamos
  currentScore = currentScore + point;
  // comprobar si he ganado o perdido la partida.
  // gano una partida, si mis puntos totales son igual a 7.5 y he perdido, si los puntos totales son mayor a 7.5
  checkGame(currentScore);
};

const newCard = document.getElementById("hitMe");
newCard.addEventListener("click", hitMe());