
        let humanScore = 0;
        let computerScore = 0;
        let computerWins = false;
        let humanWins = false;
        let move1 = document.querySelector("#rock");
        let move2 = document.querySelector("#paper");
        let move3 = document.querySelector("#scissors");
        let computerVisual = document.querySelector("#computerVisual");
        

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        
        function getComputerChoice(randomNumber) {
           randomNumber = getRandomInt(3)
            if (randomNumber == 0)
                 return  "rock"
             if (randomNumber == 1)
                 return  "paper"
            else
                 return "scissors"
            
        }
        
        
                      
        function playRound(humanChoice) {

            let computerChoice = getComputerChoice();
            
            if (computerChoice == "paper" && humanChoice == "scissors") {
                 humanWins = true; 
                 console.log("The computer selected paper, you win!")
                 const paperVisual = document.createElement("img");
                 paperVisual.src = "./images/Paper.png";
                 paperVisual.width = 240
                 computerVisual.style.alignItems = "center";
                 computerVisual.appendChild(paperVisual);
                 const youWin = document.createElement("p");
                 computerVisual.appendChild(youWin);
                 computerVisual.style.display = "flex";
                 computerVisual.style.flexDirection = 'column';
                 computerVisual.style.justifyContent = "center";
                 youWin.textContent = "you win!";
                 youWin.style.textAlign = 'center';
                 youWin.style.color =  "#72B0AB";
                 youWin.style.fontSize = "100px";
                 youWin.style.fontFamily = "Roboto";
                 youWin.style.margin = "0px";
            }
            if (computerChoice == "rock" && humanChoice == "paper") {
                humanWins = true;  
                console.log("The computer selected rock, you win!")
                 const paperVisual = document.createElement("img");
                 paperVisual.src = "./images/Rock.png";
                 paperVisual.width = 240
                 computerVisual.style.alignItems = "center";
                 computerVisual.appendChild(paperVisual);
                 const youWin = document.createElement("p");
                 computerVisual.appendChild(youWin);
                 computerVisual.style.display = "flex";
                 computerVisual.style.flexDirection = 'column';
                 computerVisual.style.justifyContent = "center";
                 youWin.textContent = "you win!";
                 youWin.style.textAlign = 'center';
                 youWin.style.color =  "#72B0AB";
                 youWin.style.fontSize = "100px";
                 youWin.style.fontFamily = "Roboto";
                 youWin.style.margin = "0px";
                
            }
            if (computerChoice == "scissors" && humanChoice == "rock") {
                humanWins = true;  
                console.log("The computer selected scissors, you win!")
                 const paperVisual = document.createElement("img");
                 paperVisual.src = "./images/Scissors.png";
                 paperVisual.width = 240
                 computerVisual.style.alignItems = "center";
                 computerVisual.appendChild(paperVisual);
                 const youWin = document.createElement("p");
                 computerVisual.appendChild(youWin);
                 computerVisual.style.display = "flex";
                 computerVisual.style.flexDirection = 'column';
                 computerVisual.style.justifyContent = "center";
                 youWin.textContent = "you win!";
                 youWin.style.textAlign = 'center';
                 youWin.style.color =  "#72B0AB";
                 youWin.style.fontSize = "100px";
                 youWin.style.fontFamily = "Roboto";
                 youWin.style.margin = "0px";
                
            }
            if (computerChoice == "paper" && humanChoice == "rock") {
                computerWins = true;  
                console.log("The computer selected paper, you lose!")
                 const paperVisual = document.createElement("img");
                 paperVisual.src = "./images/Paper.png";
                 paperVisual.width = 240
                 computerVisual.style.alignItems = "center";
                 computerVisual.appendChild(paperVisual);
                 const youWin = document.createElement("p");
                 computerVisual.appendChild(youWin);
                 computerVisual.style.display = "flex";
                 computerVisual.style.flexDirection = 'column';
                 computerVisual.style.justifyContent = "center";
                 youWin.textContent = "you lose!";
                 youWin.style.textAlign = 'center';
                 youWin.style.color =  "#FE9179";
                 youWin.style.fontSize = "100px";
                 youWin.style.fontFamily = "Roboto";
                 youWin.style.margin = "0px";
                
            }
            if (computerChoice == "rock" && humanChoice == "scissors") {
                computerWins = true; 
                console.log("The computer selected rock, you lose!")
                 const paperVisual = document.createElement("img");
                 paperVisual.src = "./images/Rock.png";
                 paperVisual.width = 240
                 computerVisual.style.alignItems = "center";
                 computerVisual.appendChild(paperVisual);
                 const youWin = document.createElement("p");
                 computerVisual.appendChild(youWin);
                 computerVisual.style.display = "flex";
                 computerVisual.style.flexDirection = 'column';
                 computerVisual.style.justifyContent = "center";
                 youWin.textContent = "you lose!";
                 youWin.style.textAlign = 'center';
                 youWin.style.color =  "#FE9179";
                 youWin.style.fontSize = "100px";
                 youWin.style.fontFamily = "Roboto";
                 youWin.style.margin = "0px";
               
            }
            if (computerChoice == "scissors" && humanChoice == "paper") {
                computerWins = true; 
                console.log("The computer selected scissor, You lose!")
                 const paperVisual = document.createElement("img");
                 paperVisual.src = "./images/Scissors.png";
                 paperVisual.width = 240
                 computerVisual.style.alignItems = "center";
                 computerVisual.appendChild(paperVisual);
                 const youWin = document.createElement("p");
                 computerVisual.appendChild(youWin);
                 computerVisual.style.display = "flex";
                 computerVisual.style.flexDirection = 'column';
                 computerVisual.style.justifyContent = "center";
                 youWin.textContent = "you lose!";
                 youWin.style.textAlign = 'center';
                 youWin.style.color =  "#FE9179";
                 youWin.style.fontSize = "100px";
                 youWin.style.fontFamily = "Roboto";
                 youWin.style.margin = "0px";
                
            }    
            if (computerChoice == "paper" && humanChoice == "paper") {
                console.log("The computer also selected paper, it's a tie!")
                 const paperVisual = document.createElement("img");
                 paperVisual.src = "./images/Paper.png";
                 paperVisual.width = 240
                 computerVisual.style.alignItems = "center";
                 computerVisual.appendChild(paperVisual);
                 const youWin = document.createElement("p");
                 computerVisual.appendChild(youWin);
                 computerVisual.style.display = "flex";
                 computerVisual.style.flexDirection = 'column';
                 computerVisual.style.justifyContent = "center";
                 youWin.textContent = "it's a tie!";
                 youWin.style.textAlign = 'center';
                 youWin.style.color =  "#b89d47";
                 youWin.style.fontSize = "100px";
                 youWin.style.fontFamily = "Roboto";
                 youWin.style.margin = "0px";
            }
                
            if (computerChoice == "rock" && humanChoice == "rock") {
                console.log("The computer also selected rock, it's a tie!")
                 const paperVisual = document.createElement("img");
                 paperVisual.src = "./images/Rock.png";
                 paperVisual.width = 240
                 computerVisual.style.alignItems = "center";
                 computerVisual.appendChild(paperVisual);
                 const youWin = document.createElement("p");
                 computerVisual.appendChild(youWin);
                 computerVisual.style.display = "flex";
                 computerVisual.style.flexDirection = 'column';
                 computerVisual.style.justifyContent = "center";
                 youWin.textContent = "it's a tie!";
                 youWin.style.textAlign = 'center';
                 youWin.style.color =  "#b89d47";
                 youWin.style.fontSize = "100px";
                 youWin.style.fontFamily = "Roboto";
                 youWin.style.margin = "0px";
            }
                
            if (computerChoice == "scissors" && humanChoice == "scissors") {
                console.log("The computer also selected scissors, it's a tie!")
                 const paperVisual = document.createElement("img");
                 paperVisual.src = "./images/Scissors.png";
                 paperVisual.width = 240
                 computerVisual.style.alignItems = "center";
                 computerVisual.appendChild(paperVisual);
                 const youWin = document.createElement("p");
                 computerVisual.appendChild(youWin);
                 computerVisual.style.display = "flex";
                 computerVisual.style.flexDirection = 'column';
                 computerVisual.style.justifyContent = "center";
                 youWin.textContent = "it's a tie!";
                 youWin.style.textAlign = 'center';
                 youWin.style.color =  "#b89d47";
                 youWin.style.fontSize = "100px";
                 youWin.style.fontFamily = "Roboto";
                 youWin.style.margin = "0px";
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
            
            console.log("Your score is: "+ humanScore + ", the computer score is: " + computerScore);
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
        