let humanScore = 0;
let computerScore = 0;
let computerWins = false;
let winner = null;
let move1 = document.querySelector("#rock");
let move2 = document.querySelector("#paper");
let move3 = document.querySelector("#scissors");
let points = document.querySelector("#points");
let body = document.querySelector("body");
let computerVisual = document.querySelector("#computerVisual");
const callBlocker = document.createElement("div");
let gameEnd = false;
let pointArray = Array.from(points.children);
let wordSize = "50px";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(randomNumber) {
  randomNumber = getRandomInt(3);
  if (randomNumber == 0) return "rock";
  if (randomNumber == 1) return "paper";
  else return "scissors";
}

function callScreenBlocker() { 
    body.appendChild(callBlocker);
    callBlocker.style.position = "fixed";
    callBlocker.style.backgroundColor = "#ffffff";
    callBlocker.style.opacity = "0";
    callBlocker.style.height = "100vh";
    callBlocker.style.width = "100vh";
    callBlocker.style.padding = "150px";
}


function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  
  let iconWidth = 200;

  if (computerChoice == "paper" && humanChoice == "scissors") {
    winner = "human";
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
    return winner
  }
  if (computerChoice == "rock" && humanChoice == "paper") {
    winner = "human";
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
    return winner
  }
  if (computerChoice == "scissors" && humanChoice == "rock") {
    winner = "human";
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
    return winner
  }
  if (computerChoice == "paper" && humanChoice == "rock") {
    winner = "computer";
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
    return winner
  }
  if (computerChoice == "rock" && humanChoice == "scissors") {
    winner = "computer";
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
    return winner
  }
  if (computerChoice == "scissors" && humanChoice == "paper") {
    winner = "computer";
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
    return winner
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
  if (winner == true) {
    humanScore++;
    winner = false;
  }
  if (computerWins == true) {
    computerScore++;
    computerWins = false;
  }

  console.log(
    "Your score is: " + humanScore + ", the computer score is: " + computerScore
  );
}


let i = 0;

move1.addEventListener("click", () => {winner = playRound("rock")
    setTimeout(() => {updateScore();}, 1600);
});
move2.addEventListener("click", () => {winner = playRound("paper")
    setTimeout(() => {updateScore();}, 1600);
});
move3.addEventListener("click", () => {winner = playRound("scissors")
    setTimeout(() => {updateScore();}, 1600);
});

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    for (i = 0; i < pointArray.length; i++) {
        pointArray[i].style.backgroundColor = "rgb(221, 221, 221)";
    }
    i = 0;
}


function updateScore() {  
    if (winner == "human") {
        pointArray[i].style.backgroundColor = "#72B0AB";
        i++
        humanScore++
    }   
    if (winner == "computer") {
        pointArray[i].style.backgroundColor = "#FE9179";
        i++
        computerScore++    
    }
    if (humanScore == 3) {
        console.log("you win!");
        callScreenBlocker();
        const resultMsg = document.createElement("p"); 
        setTimeout(() => {
        computerVisual.appendChild(resultMsg);
        }, 300);   
        resultMsg.textContent = "Congratulations, you won!"
        resultMsg.style.textAlign = "center";
        resultMsg.style.color = "#72B0AB";
        resultMsg.style.fontSize = wordSize;
        resultMsg.style.fontFamily = "Roboto";
        resultMsg.style.margin = "0px";
        setTimeout(() => {
        resultMsg.remove();
        }, 800);
        setTimeout(() => {
        callBlocker.remove();
        }, 1000);
        setTimeout(() => {
        resetGame();
        }, 1800);

        
    }
    if (computerScore == 3) {
        console.log("you lost!");
        callScreenBlocker();
        const resultMsg = document.createElement("p"); 
        setTimeout(() => {
        computerVisual.appendChild(resultMsg);
        }, 300);
        resultMsg.textContent = "Too bad, you lost!"
        resultMsg.style.textAlign = "center";
        resultMsg.style.color = "#FE9179";
        resultMsg.style.fontSize = wordSize;
        resultMsg.style.fontFamily = "Roboto";
        resultMsg.style.margin = "0px";
        setTimeout(() => {
        resultMsg.remove();
        }, 1000);
        setTimeout(() => {
        callBlocker.remove();
        }, 1800);
         setTimeout(() => {
        resetGame();
        }, 1800);
        
    }

}

    

