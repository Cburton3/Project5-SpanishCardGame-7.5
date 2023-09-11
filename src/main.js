//selecting card part

let currentScore = 0;

const showScore = () => {
  document.getElementById("score").innerHTML = `${currentScore}`;
  if (currentScore > 7.5) {
    gameOver();
  }
};

const gameOver = () => {
  document.getElementById("score").innerHTML = "You have gone over 7.5";
  document.getElementById("hitMe").disabled = true;
};

document.addEventListener("DOMContentLoaded", showScore);

const showCard = () => {
  let randomNumber = () => Math.floor(Math.random() * 11);
  if (randomNumber > 7) {
    return randomNumber + 2;//use return after if
  }
  if (!randomNumber >= 12) {
    return randomNumber;
  }

};
  const randomCardNumber = randomNumber();


const newCard = document.getElementById("hitMe");
newCard.addEventListener("click", showCard);

const countNumber = (cardNumber) => { //this was just the place holder cardNumber its only a var when the fx is called NOT int eh declaration
  if (cardNumber === 1) {
    currentScore++;
    return changeCard(card1); //this didnt work as when you 'return' it leaves this section of the function
  }

  if (cardNumber === 2) {
    currentScore + 2;
    return changeCard(card2);
  }

  if (cardNumber === 3) {
    currentScore + 3;
    return changeCard(card3);
  }

  if (cardNumber === 4) {
    currentScore + 4;
    return changeCard(card4);
  }

  if (cardNumber === 5) {
    currentScore + 5;
    return changeCard(card5);
  }

  if (cardNumber === 6) {
    currentScore + 6;
    return changeCard(card6);
  }

  if (cardNumber === 7) {
    currentScore + 7;
    return changeCard(card7);
  }

  if (cardNumber === 10) {
    currentScore + 0.5;
    return changeCard(cardSoto);
  }

  if (cardNumber === 11) {
    currentScore + 0.5;
    return changeCard(cardCaballo);
  }

  if (cardNumber === 10) {
    currentScore + 0.5;
    return changeCard(cardRey);
  }
};

countNumber(randomCardNumber);

function changeCard(card) {
  const cardBack = document.getElementById("startCard");
  const cards = document.getElementById(card); //need to link this part with the random number

  cardBack.src = card.scr;
  cardBack.alt = card.alt;
}

const card1 = document.getElementById("1 de copas");
const card2 = document.getElementById("2 de copas");
const card3 = document.getElementById("3 de copas");
const card4 = document.getElementById("4 de copas");
const card5 = document.getElementById("5 de copas");
const card6 = document.getElementById("6 de copas");
const card7 = document.getElementById("7 de copas");
const cardSoto = document.getElementById("Sota de copas");
const cardCaballo = document.getElementById("Caballo de copas");
const cardRey = document.getElementById("Rey de copas");

cardBack.addEventListener("click", () => changeCard());
