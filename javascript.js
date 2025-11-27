let humanScore = 0;
let computerScore = 0;
let computerWins = false;
let humanWins = false;
let move1 = document.querySelector("#rock");
let move2 = document.querySelector("#paper");
let move3 = document.querySelector("#scissors");
let points = document.querySelector("#points");
let body = document.querySelector("body");
let computerVisual = document.querySelector("#computerVisual");
const callBlocker = document.createElement("div");
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(randomNumber) {
  randomNumber = getRandomInt(3);
  if (randomNumber == 0) return "rock";
  if (randomNumber == 1) return "paper";
  else return "scissors";
}

function callScreenBlocker() { // need to fix the size. 
    body.appendChild(callBlocker);
    callBlocker.style.position = "fixed";
    callBlocker.style.backgroundColor = "#ffffff";
    callBlocker.style.opacity = "0";
    callBlocker.style.height = "100vh";
    callBlocker.style.width = "100vh";
}

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  let wordSize = "50px";
  let iconWidth = 200;

  if (computerChoice == "paper" && humanChoice == "scissors") {
    humanWins = true;
    console.log("The computer selected paper, you win!");
    const iconVisual = document.createElement("img");
    iconVisual.src = "./images/Paper.png";
    iconVisual.width = iconWidth;
    computerVisual.style.alignItems = "center";
    computerVisual.appendChild(iconVisual);
    const resultMsg = document.createElement("p");
    setTimeout(() => {
      computerVisual.appendChild(resultMsg);
    }, 800);
    callScreenBlocker();
    computerVisual.style.display = "flex";
    computerVisual.style.flexDirection = "column";
    computerVisual.style.justifyContent = "center";
    resultMsg.textContent = "you win!";
    resultMsg.style.textAlign = "center";
    resultMsg.style.color = "#72B0AB";
    resultMsg.style.fontSize = wordSize;
    resultMsg.style.fontFamily = "Roboto";
    resultMsg.style.margin = "0px";
    setTimeout(() => {
      resultMsg.remove();
    }, 1600);
    setTimeout(() => {
      iconVisual.remove();
    }, 1600);
    setTimeout(() => {
      callBlocker.remove();
    }, 1600);
  }
  if (computerChoice == "rock" && humanChoice == "paper") {
    humanWins = true;
    console.log("The computer selected rock, you win!");
    const iconVisual = document.createElement("img");
    iconVisual.src = "./images/Rock.png";
    iconVisual.width = iconWidth;
    computerVisual.style.alignItems = "center";
    computerVisual.appendChild(iconVisual);
    const resultMsg = document.createElement("p");
    setTimeout(() => {
      computerVisual.appendChild(resultMsg);
    }, 800); 
    callScreenBlocker();
    computerVisual.style.display = "flex";
    computerVisual.style.flexDirection = "column";
    computerVisual.style.justifyContent = "center";
    resultMsg.textContent = "you win!";
    resultMsg.style.textAlign = "center";
    resultMsg.style.color = "#72B0AB";
    resultMsg.style.fontSize = wordSize;
    resultMsg.style.fontFamily = "Roboto";
    resultMsg.style.margin = "0px";
    setTimeout(() => {
      resultMsg.remove();
    }, 1600);
    setTimeout(() => {
      iconVisual.remove();
    }, 1600);
    setTimeout(() => {
      callBlocker.remove();
    }, 1600);
  }
  if (computerChoice == "scissors" && humanChoice == "rock") {
    humanWins = true;
    console.log("The computer selected scissors, you win!");
    const iconVisual = document.createElement("img");
    iconVisual.src = "./images/Scissors.png";
    iconVisual.width = iconWidth;
    computerVisual.style.alignItems = "center";
    computerVisual.appendChild(iconVisual);
    const resultMsg = document.createElement("p");
    setTimeout(() => {
      computerVisual.appendChild(resultMsg);
    }, 800);
    callScreenBlocker();
    computerVisual.style.display = "flex";
    computerVisual.style.flexDirection = "column";
    computerVisual.style.justifyContent = "center";
    resultMsg.textContent = "you win!";
    resultMsg.style.textAlign = "center";
    resultMsg.style.color = "#72B0AB";
    resultMsg.style.fontSize = wordSize;
    resultMsg.style.fontFamily = "Roboto";
    resultMsg.style.margin = "0px";
    setTimeout(() => {
      resultMsg.remove();
    }, 1600);
    setTimeout(() => {
      iconVisual.remove();
    }, 1600);
    setTimeout(() => {
      callBlocker.remove();
    }, 1600);
  }
  if (computerChoice == "paper" && humanChoice == "rock") {
    computerWins = true;
    console.log("The computer selected paper, you lose!");
    const iconVisual = document.createElement("img");
    iconVisual.src = "./images/Paper.png";
    iconVisual.width = iconWidth;
    computerVisual.style.alignItems = "center";
    computerVisual.appendChild(iconVisual);
    const resultMsg = document.createElement("p");
    setTimeout(() => {
      computerVisual.appendChild(resultMsg);
    }, 800);
    callScreenBlocker();
    computerVisual.style.display = "flex";
    computerVisual.style.flexDirection = "column";
    computerVisual.style.justifyContent = "center";
    resultMsg.textContent = "you lose!";
    resultMsg.style.textAlign = "center";
    resultMsg.style.color = "#FE9179";
    resultMsg.style.fontSize = wordSize;
    resultMsg.style.fontFamily = "Roboto";
    resultMsg.style.margin = "0px";
    setTimeout(() => {
      resultMsg.remove();
    }, 1600);
    setTimeout(() => {
      iconVisual.remove();
    }, 1600);
    setTimeout(() => {
      callBlocker.remove();
    }, 1600);
  }
  if (computerChoice == "rock" && humanChoice == "scissors") {
    computerWins = true;
    console.log("The computer selected rock, you lose!");
    const iconVisual = document.createElement("img");
    iconVisual.src = "./images/Rock.png";
    iconVisual.width = iconWidth;
    computerVisual.style.alignItems = "center";
    computerVisual.appendChild(iconVisual);
    const resultMsg = document.createElement("p");
    setTimeout(() => {
      computerVisual.appendChild(resultMsg);
    }, 800);
    callScreenBlocker();
    computerVisual.style.display = "flex";
    computerVisual.style.flexDirection = "column";
    computerVisual.style.justifyContent = "center";
    resultMsg.textContent = "you lose!";
    resultMsg.style.textAlign = "center";
    resultMsg.style.color = "#FE9179";
    resultMsg.style.fontSize = wordSize;
    resultMsg.style.fontFamily = "Roboto";
    resultMsg.style.margin = "0px";
    setTimeout(() => {
      resultMsg.remove();
    }, 1600);
    setTimeout(() => {
      iconVisual.remove();
    }, 1600);
    setTimeout(() => {
      callBlocker.remove();
    }, 1600);
  }
  if (computerChoice == "scissors" && humanChoice == "paper") {
    computerWins = true;
    console.log("The computer selected scissor, You lose!");
    const iconVisual = document.createElement("img");
    iconVisual.src = "./images/Scissors.png";
    iconVisual.width = iconWidth;
    computerVisual.style.alignItems = "center";
    computerVisual.appendChild(iconVisual);
    const resultMsg = document.createElement("p");
    setTimeout(() => {
      computerVisual.appendChild(resultMsg);
    }, 800);
    callScreenBlocker();
    computerVisual.style.display = "flex";
    computerVisual.style.flexDirection = "column";
    computerVisual.style.justifyContent = "center";
    resultMsg.textContent = "you lose!";
    resultMsg.style.textAlign = "center";
    resultMsg.style.color = "#FE9179";
    resultMsg.style.fontSize = wordSize;
    resultMsg.style.fontFamily = "Roboto";
    resultMsg.style.margin = "0px";
    setTimeout(() => {
      resultMsg.remove();
    }, 1600);
    setTimeout(() => {
      iconVisual.remove();
    }, 1600);
    setTimeout(() => {
      callBlocker.remove();
    }, 1600);
  }
  if (computerChoice == "paper" && humanChoice == "paper") {
    console.log("The computer also selected paper, it's a tie!");
    const iconVisual = document.createElement("img");
    iconVisual.src = "./images/Paper.png";
    iconVisual.width = iconWidth;
    computerVisual.style.alignItems = "center";
    computerVisual.appendChild(iconVisual);
    const resultMsg = document.createElement("p");
    setTimeout(() => {
      computerVisual.appendChild(resultMsg);
    }, 800);
    callScreenBlocker();
    computerVisual.style.display = "flex";
    computerVisual.style.flexDirection = "column";
    computerVisual.style.justifyContent = "center";
    resultMsg.textContent = "it's a tie!";
    resultMsg.style.textAlign = "center";
    resultMsg.style.color = "#b89d47";
    resultMsg.style.fontSize = wordSize;
    resultMsg.style.fontFamily = "Roboto";
    resultMsg.style.margin = "0px";
    setTimeout(() => {
      resultMsg.remove();
    }, 1600);
    setTimeout(() => {
      iconVisual.remove();
    }, 1600);
    setTimeout(() => {
      callBlocker.remove();
    }, 1600);
  }

  if (computerChoice == "rock" && humanChoice == "rock") {
    console.log("The computer also selected rock, it's a tie!");
    const iconVisual = document.createElement("img");
    iconVisual.src = "./images/Rock.png";
    iconVisual.width = iconWidth;
    computerVisual.style.alignItems = "center";
    computerVisual.appendChild(iconVisual);
    const resultMsg = document.createElement("p");
    setTimeout(() => {
      computerVisual.appendChild(resultMsg);
    }, 800);
    callScreenBlocker();
    computerVisual.style.display = "flex";
    computerVisual.style.flexDirection = "column";
    computerVisual.style.justifyContent = "center";
    resultMsg.textContent = "it's a tie!";
    resultMsg.style.textAlign = "center";
    resultMsg.style.color = "#b89d47";
    resultMsg.style.fontSize = wordSize;
    resultMsg.style.fontFamily = "Roboto";
    resultMsg.style.margin = "0px";
    setTimeout(() => {
      resultMsg.remove();
    }, 1600);
    setTimeout(() => {
      iconVisual.remove();
    }, 1600);
    setTimeout(() => {
      callBlocker.remove();
    }, 1600);
  }

  if (computerChoice == "scissors" && humanChoice == "scissors") {
    console.log("The computer also selected scissors, it's a tie!");
    const iconVisual = document.createElement("img");
    iconVisual.src = "./images/Scissors.png";
    iconVisual.width = iconWidth;
    computerVisual.style.alignItems = "center";
    computerVisual.appendChild(iconVisual);
    const resultMsg = document.createElement("p");
    setTimeout(() => {
      computerVisual.appendChild(resultMsg);
    }, 800);
    callScreenBlocker();
    computerVisual.style.display = "flex";
    computerVisual.style.flexDirection = "column";
    computerVisual.style.justifyContent = "center";
    resultMsg.textContent = "it's a tie!";
    resultMsg.style.textAlign = "center";
    resultMsg.style.color = "#b89d47";
    resultMsg.style.fontSize = wordSize;
    resultMsg.style.fontFamily = "Roboto";
    resultMsg.style.margin = "0px";
    setTimeout(() => {
      resultMsg.remove();
    }, 1600);
    setTimeout(() => {
      iconVisual.remove();
    }, 1600);
    setTimeout(() => {
      callBlocker.remove();
    }, 1600);
  }
}

function playGame() {
  if (humanWins == true) {
    humanScore++;
    humanWins = false;
  }
  if (computerWins == true) {
    computerScore++;
    computerWins = false;
  }

  console.log(
    "Your score is: " + humanScore + ", the computer score is: " + computerScore
  );
}

//playGame()
// if (humanScore > computerScore) {
//    console.log("Congratulations, you win!")
// }
// if (humanScore == computerScore)
//    console.log("It's a tie!")
// else {
//    console.log("You lost! better luck next time...")
// }

move1.addEventListener("click", () => playRound("rock"));
move2.addEventListener("click", () => playRound("paper"));
move3.addEventListener("click", () => playRound("scissors"));


