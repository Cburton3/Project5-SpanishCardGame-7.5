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

function printUrlImage(urlCard) { 
  const imgElement = document.getElementById("startCard");
  if (imgElement !== null && imgElement !== undefined) {
    imgElement.src = urlCard;
  }
};


function givePointCard(card) { //makes sense
  console.log(card)
  return card <= 7 ? card : 0.5 //he cambiado 7 por 8 
};



let message = "";
function checkGame(finalScore) {
  if (finalScore > 7.5) {
    gameOver();
  }
  if (finalScore === 7.5) {
    winGame();
  }
  // if (finalScore < 7.5) {
  //   endGameMessage(finalScore);
  // }
};

const disableButtons = () => {
  document.getElementById("hitMe").disabled = true;
document.getElementById("stick").disabled = true;
};

function endGameMessage(finalScore) { //the 0.5's of this dont work
    if (finalScore < 4) {
        message = "Has sido muy conservador";
      }
      if (finalScore === 4 || 5) {
        message = "Te ha entrado el canguelo eh?";
      }
      if (finalScore === 6 || 7) {
        message = "Casi casi...";
      }
      else {
        message = "Puntuacion no reconocida";
      }
      document.getElementById("score").innerHTML = `Your final score is ${currentScore}. ${message}`;
      // disableButtons();
};//RE  make this the stick button

function winGame() {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.textContent = "¡Lo has clavado! ¡Enhorabuena!";
  }
  disableButtons();

};

function gameOver() {
  document.getElementById("score").innerHTML =
    "Game Over, better luck next time!";
    disableButtons();
};

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

 
  
  const randomNumber = giveRandomNumber(); //makes random number and stores it
  
  const cardNumber = giveCardNumber(randomNumber);
  // const cardNumber = giveCardNumber(giveRandomNumber()); //these are the same
 
  const urlCard = giveUrlCard(cardNumber); //puts randomnumber through fx and returns a url

  printUrlImage(urlCard); //prints url the card to the src

  const points = givePointCard(cardNumber); //this gives VALUE of the cards
    // según la carta, ver que puntos le corresponden según la lógica que nos diga el enunciado (si la carta es menor a 7 los puntos son el valor de la carta y si es mayor a 7 los puntos son 0.5)

  // sumar el punto obtenido anteriormente a los puntos totales que tengamos
  addPoints(points);

  showScore();
  // comprobar si he ganado o perdido la partida.
  // gano una partida, si mis puntos totales son igual a 7.5 y he perdido, si los puntos totales son mayor a 7.5
  checkGame(currentScore);

  
};

const newCard = document.getElementById("hitMe");
// newCard.addEventListener("click", () => hitMe()); //same as below
newCard.addEventListener("click", hitMe);

//hitMe() la anotacion de llamada, this is wrong cos you dont want to exe but SAY what it is. Arrow function son para fucntions sin nombre so what this does is create a function that calls mine if you put () => hitMe()


//notes to me:
// 
//if i save a function as a variable, why would I then save the result as another varialbe when i can just call the function variable?

//answer

//saves computing and therefore time if you just call teh result instead of calling whole function
//to ensure its value doesnt change (if the calculation depends on diff things it might give a diff result later on)
//makes it easier to read the code