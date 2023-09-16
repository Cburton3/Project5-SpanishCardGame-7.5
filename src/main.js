//odin projecte
//each fx only one thing at a time 
//make sep fx 
//if global no need to add param

// currentScore = currentScore + 0.5
//if directly after arrow its the same at returnign its an implict tretuyrn 


let currentScore = 0;
// single responsibilty principle - 1 function 1 task
const showScore = () => {
  document.getElementById("score").innerHTML = ` your score is ${currentScore}`;
};

// the pack of cards
const cards = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

const isGameOver = () => {
  if (currentScore > 7.5) {
    gameOver();
  }
};

const gameOver = () => {
  document.getElementById("score").innerHTML = "You have gone over 7.5";
  document.getElementById("hitMe").disabled = true;
};

// draw a card - gives us a card from the pack
const drawCard = () => {
  let randomNumber = Math.floor(Math.random() * 10); //10 cos the array STARTS at 0, 1, ..
  return cards[randomNumber];  ///this gives you the VALUE on each card
};

const calculateScore = (card) => {
  if (card <= 7) {
    currentScore = currentScore + card;
  } else if (card > 7) {
    currentScore = currentScore + 0.5;
  } //no return as adding to current score-return is only to get a specific number for calcscore
};

const hitMe = () => {
  const cardDrawn = drawCard();
  calculateScore(cardDrawn);
}

// calculateScore(drawCard);

document.addEventListener("DOMContentLoaded", showScore);
//chage this to a switch case

const countNumber = (cardNumber) => { 
  switch (cardNumber) {
    case (cardNumber === 1):
    showCards(card1);
    break;  
    case (cardNumber === 2):
    showCards(card2);
    break;   
    case (cardNumber === 3):
    showCards(card3);
    break; 
    case (cardNumber === 4):
    showCards(card4);
    break;    
    case (cardNumber === 5):
    showCards(card5);
    break;  
    case (cardNumber === 6):
    showCards(card6);
    case (cardNumber === 7):
    showCards(card7);
    break; 
    case (cardNumber === 8):
    showCards(cardSoto);
    break;    
    case (cardNumber === 9):
    showCards(cardCaballo);
    break;    
    case (cardNumber === 10):
    showCards(cardRey);
    break;         
  }
}

  countNumber(cardDrawn);

const showCards  = (card) => {
  const cardPack = document.getElementById("cardPack");
  cardPack.appendChild(card);
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

const handleCompruebaClick = () => {
  showScore();
//
  //
};
const newCard = document.getElementById("hitMe");
newCard.addEventListener("click", handleCompruebaClick);