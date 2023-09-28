//odin projecte
//each fx only one thing at a time 
//make sep fx 
//if global no need to add param

// currentScore = currentScore + 0.5
//if directly after arrow its the same at returnign its an implict tretuyrn 


let currentScore = 0;
// single responsibilty principle - 1 function 1 task


// draw a card - gives us a card from the pack
const drawCard = () => {
  let randomNumber = Math.floor(Math.random() * 10); //10 cos the array STARTS at 0, 1, ..
  return cards[randomNumber];  ///this gives you the VALUE on each card
};

const showScore = () => {
  document.getElementById("score").innerHTML = `Your score is ${currentScore}`;
};

// the pack of cards
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //change to random number 1-10

const isGameOver = () => {
  if (currentScore > 7.5) {
    gameOver();
  }
};

const gameOver = () => {
  document.getElementById("score").innerHTML = "Game Over: You have gone over 7.5";
  document.getElementById("hitMe").disabled = true;
  document.getElementById("stick").disabled = true;
};

// const reset = () => {
  const reset = document.getElementById('reset');
  // reset.textContent = 'Reset';
  // reset.setAttribute('id', 'reset');
  // const buttonContainer =document.querySelector('.buttons');
  // buttonContainer.appendChild(reset);

  reset.onclick = () => {
    currentScore = 0;
    document.getElementById("score").innerHTML = `Your score is ${currentScore}`;
    document.getElementById("hitMe").disabled = false;
    document.getElementById("stick").disabled = false;
    const cardPack = document.getElementById("cardPack");
   if (cardPack && cardPack.childNodes.length > 1) {
    for(let i = cardPack.childNodes.length - 1; i > 0; i--) {
      const childNode = cardPack.childNodes[i];
      cardPack.removeChild(childNode);
    }
   }
  };

// }

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
  countNumber(cardDrawn);
};

// calculateScore(drawCard);

document.addEventListener("DOMContentLoaded", showScore);
//chage this to a switch case

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
}

  // countNumber(cardDrawn);

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



stickFunction = (finalScore) => {  
  let message = '';
  switch (finalScore) {
    case 0:
      if (finalScore <= 4) {
    message = 'Has sido muy conservador';
      }
    break;  
    case 5:
      message = 'Te ha entrado el canguelo eh?';
    break;
    case 6:
      message = "Casi casi...";
    break;
    case 7:
      message = "Casi casi...";
    break;
    case 7.5:
      message = "¡ Lo has clavado! ¡Enhorabuena!";
    break;
    default:
      message = 'puntuacion no reconocida';
}
document.getElementById("score").innerHTML = `Your final score is ${currentScore}. ${message}`;
document.getElementById("hitMe").disabled = true; 
//maybe apped message to the score div
}

const stick = document.getElementById("stick");
stick.addEventListener("click", stickFunction(currentScore));

//issue so far, if same umber 2 doest to apped a secod card
  // reset.setAttribute('id', 'reset');
//reset button gets rid of frist card too
