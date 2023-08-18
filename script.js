document.addEventListener("DOMContentLoaded", function () {
    const options = ["rock", "paper", "scissors"];
    
    // Function to generate the computer's choice
    function computerPlay() {
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    }

    const scoretext = document.querySelector(".ScoreText");
    const newp =  document.createElement('p');

    
    // Function to determine the winner
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            newp.textContent = "It's a tie!";
            scoretext.appendChild(newp)
            return "It's a tie!";
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            newp.textContent = "You win!";
            scoretext.appendChild(newp)
            return "You win!";
        } else {
            newp.textContent = "Computer wins!";
            scoretext.appendChild(newp)
            return "Computer wins!";
        }
    }
    
    // Function to handle the game logic
    function game(playerChoice) {
        const computerChoice = computerPlay();
        const result = playRound(playerChoice, computerChoice);
        alert(`You chose: ${playerChoice}\nComputer chose: ${computerChoice}\nResult: ${result}`);
    }
    
    // Add event listeners for each choice
    const choices = document.querySelectorAll(".Sandbox > div");
    choices.forEach(choice => {
        choice.addEventListener("click", function () {
            const playerChoice = this.className;
            game(playerChoice.toLowerCase());
        });
    });
});