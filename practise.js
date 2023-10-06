let currentScore = 0;

const drawCard = () => {
  let randomNumber = Math.floor(Math.random() * 10); //10 cos the array STARTS at 0, 1, ..
  return cards[randomNumber]; ///this gives you the VALUE on each card
};
const showScore = () => {
  document.getElementById("score").innerHTML = `Your score is ${currentScore}`;
};
// GameOver
//random number 1-10
const isGameOver = () => {
  if (currentScore > 7.5) {
    gameOver();
  }
};
const gameOver = () => {
  document.getElementById("score").innerHTML =
    "Game Over: You have gone over 7.5";
  document.getElementById("hitMe").disabled = true;
  document.getElementById("stick").disabled = true;
};
//reset button
const revertCard = () => {
  const cardPack = document.getElementById("cardPack");
  const firstChild = cardPack.firstElementChild;
  const cardBack = document.getElementById("startCard");
  cardPack.removeChild(firstChild);
  cardPack.appendChild(cardBack);
};
const resetScore = () => {
  currentScore = 0;
  document.getElementById("score").innerHTML = `Your score is ${currentScore}`;
};
const resetButtons = () => {
  document.getElementById("hitMe").disabled = false;
  document.getElementById("stick").disabled = false;
};
const handleReset = () => {
  revertCard();
  resetScore();
  resetButtons();
};
const reset = document.getElementById("reset");
reset.addEventListener("click", handleReset);
const calculateScore = (card) => {
  if (card <= 7) {
    currentScore = currentScore + card;
  } else if (card > 7) {
    currentScore = currentScore + 0.5;
  }
};
const hitMe = () => {
  const cardDrawn = drawCard();
  calculateScore(cardDrawn);
  countNumber(cardDrawn);
};
document.addEventListener("DOMContentLoaded", showScore);
const countNumber = (cardNumber) => {
  switch (cardNumber) {
    case 1:
      showCards(card1);
      break;
    case 2:
      showCards(card2);
      break;
    case 3:
      showCards(card3);
      break;
    case 4:
      showCards(card4);
      break;
    case 5:
      showCards(card5);
      break;
    case 6:
      showCards(card6);
      break;
    case 7:
      showCards(card7);
      break;
    case 8:
      showCards(cardSota);
      break;
    case 9:
      showCards(cardCaballo);
      break;
    case 10:
      showCards(cardRey);
      break;
  }
};
function showCards(card) {
  const cardBack = document.getElementById("startCard");
  cardBack.src = card.src;
  cardBack.alt = card.alt;
}
const cardSota = document.getElementById("Sota de copas");
const cardCaballo = document.getElementById("Caballo de copas");
const cardRey = document.getElementById("Rey de copas");
const handleCompruebaClick = () => {
  hitMe();
  showScore();
  isGameOver();
};
const newCard = document.getElementById("hitMe");
newCard.addEventListener("click", handleCompruebaClick);
let message = "";
const messageFunction = (finalScore) => {
  if (finalScore < 4) {
    message = "Has sido muy conservador";
  } else if (finalScore <= 5) {
    message = "Te ha entrado el canguelo eh?";
  } else if (finalScore <= 7) {
    message = "Casi casi...";
  } else if (finalScore === 7.5) {
    message = "¡Lo has clavado! ¡Enhorabuena!";
  } else {
    message = "Puntuacion no reconocida";
  }
  return message;
};
function finalScoreFunction() {
  document.getElementById(
    "score"
  ).innerHTML = `Your final score is ${currentScore}. ${message}`;
  document.getElementById("hitMe").disabled = true;
  document.getElementById("stick").disabled = true;
}
const stickHandle = () => {
  messageFunction(currentScore);
  finalScoreFunction();
};
const stick = document.getElementById("stick");
stick.addEventListener("click", stickHandle);