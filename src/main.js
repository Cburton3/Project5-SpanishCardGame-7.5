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
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
}

function printUrlImage(urlCard) {
  const imgElement = document.getElementById("startCard");
  if (imgElement !== null && imgElement !== undefined) {
    imgElement.src = urlCard;
  }
}

function givePointCard(card) {
  console.log(card);
  return card <= 7 ? card : 0.5;
}

let message = "";
function checkGame(finalScore) {
  if (finalScore > 7.5) {
    gameOver();
  }
  if (finalScore === 7.5) {
    winGame();
  }
}

const disableButtons = () => {
  document.getElementById("hitMe").disabled = true;
  document.getElementById("stick").disabled = true;
};

function winGame() {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.textContent = "¡Lo has clavado! ¡Enhorabuena!";
  }
  disableButtons();
}

function gameOver() {
  document.getElementById("score").innerHTML =
    "Game Over, better luck next time!";
  disableButtons();
}

const giveRandomNumber = () => {
  return Math.ceil(Math.random() * 10);
};

const giveCardNumber = (randomNumber) => {
  if (randomNumber > 7) {
    randomNumber = randomNumber + 2;
  }
  return randomNumber;
};

const addPoints = (points) => {
  currentScore = currentScore + points;
};

function hitMe() {
  const randomNumber = giveRandomNumber();

  const cardNumber = giveCardNumber(randomNumber);

  const urlCard = giveUrlCard(cardNumber);

  printUrlImage(urlCard);

  const points = givePointCard(cardNumber);

  addPoints(points);

  showScore();
  checkGame(currentScore);
}

const newCard = document.getElementById("hitMe");
newCard.addEventListener("click", hitMe);

//STICK BUTTON

function endGameMessage(finalScore) {
  if (finalScore < 4) {
    message = "Has sido muy conservador";
  } else if (finalScore <= 5) {
    message = "Te ha entrado el canguelo eh?";
  } else if (finalScore <= 7) {
    message = "Casi casi...";
  } else {
    message = "Puntuacion no reconocida";
  }
  document.getElementById(
    "score"
  ).innerHTML = `Your final score is ${currentScore}. ${message}`;
}

const stickHandle = () => {
  endGameMessage(currentScore);
  disableButtons();
};

const stick = document.getElementById("stick");
stick.addEventListener("click", stickHandle);

//RESET BUTTON

const resetScore = () => {
  currentScore = 0;
  document.getElementById("score").innerHTML = `Your score is ${currentScore}`;
};

const resetButtons = () => {
  document.getElementById("hitMe").disabled = false;
  document.getElementById("stick").disabled = false;
};

const resetCard = () => {
  const urlCard = giveUrlCard(0);
  printUrlImage(urlCard);
};

const handleReset = () => {
  resetScore();
  resetCard();
  resetButtons();
};

const reset = document.getElementById("reset");
reset.addEventListener("click", handleReset);
