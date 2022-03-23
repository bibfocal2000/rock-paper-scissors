# rock-paper-scissors

Odin Project - Rock, Paper, Scissors Game

1. Create index page with external main.js file name

2. Create main.js file

3. Create a function called computerPlay() that contains an array of options. Use random() funciont to generate a number between 0 and 3, then return options[randomNumber].

4. Create a function called playerPlay(playerInput). This is only a helper function that returns the players choice in lowercase letters.

5. Create a funcion called [playRound(computerPlay, playerPlay)].

Plays one round of the game by asking the player their choice with a prompt.

Logic included to restict the player to rock, paper, or scissors.

Takes two functions as parameters, computerPlay() and playerPlay().

Variables store the values provided by both functions and then passes those values into conditional logic to determine who wins the round. A win adds 1 to a score variable and then both players scores are evaluated.

Logic for a tie or a typo are also added.

6. Create a funcion called game()

A function with a while loop so that the player can decide how many rounds to play.

The loop will stop at the moment either player has reached half of the rounds chosen plus 1.

just like in sports, if playing best of 7, then the first team to reach 4 ends the series as the champion. There would be no point in continueing because the other team can only win 3 games.

Returns who is the winner of the series or best of n.

7. Call the game function to play.

# Functions in the game

const computerPlay = () => {
const options = ["rock", "paper", "scissors"];
let randomNumber = Math.floor(Math.random() \* 3);
return options[randomNumber];
};

const playerPlay = (playerInput) => {
return playerInput.toLowerCase();
};

const playRound = (computerPlay, playerPlay) => {
let playerInput = prompt("Enter either 'rock', 'paper', or 'scissors");
let computer = computerPlay();
let player = playerPlay(playerInput);

if (
(computer === "rock" && player === "scissors") ||
(computer === "paper" && player === "rock") ||
(computer === "scissors" && player === "paper")
) {
computerScore++;
return `${computer} beats ${player}, computer wins this round`;
} else if (
(player === "rock" && computer === "scissors") ||
(player === "paper" && computer === "rock") ||
(player === "scissors" && computer === "paper")
) {
playerScore++;
return `${player} beats ${computer}, player wins this round`;
} else if (computer === player) {
return `${player} = ${computer}, it's a tie`;
} else {
return `${playerInput} is not an option`;
}
};

const game = () => {
while (true) {
if (computerScore == bestOf || playerScore == bestOf) {
break;
} else {
console.log(playRound(computerPlay, playerPlay));
console.log(bestOf);
console.log(`Player: ${playerScore} Rounds ${rounds}`);
console.log(`Computer: ${computerScore} Rounds ${rounds}`);
}
}

if (computerScore > playerScore) {
return `Computer is the CHAMPION by winning ${computerScore} out of ${rounds} games`;
} else if (playerScore >= computerScore) {
return `You are the CHAMPION by winning ${playerScore} out of ${rounds} games`;
}
};

# Game Variables

let rounds = 10;
let bestOf = Math.floor(rounds / 2 + 1);
let computerScore = 0;
let playerScore = 0;

# Future Plans

Design a website for the game for an interactive experience
Give the player an option to choose how many rounds to play
Provide buttons for the player to select their options rather than typing rock, paper, or scissors.
provide a 'Play Again' button.
