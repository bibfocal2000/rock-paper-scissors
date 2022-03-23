"use_strict";

//@comment: functions

//*Computer has array of 3 options
//*random from 0-2
//*return option from array[0, 1, 2]
const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
};

//*A helper function that returns the players choice in lowercase
const playerPlay = (playerInput) => {
  return playerInput.toLowerCase();
};

//* Plays one round of the game by asking the player their choice with a prompt.
//* Logic included to restict the player to rock, paper, or scissors
//* Takes two functions as parameters, computerPlay() and playerPlay().
//* Variables store the values provided by both functions and then passes those values into conditional logic to determine who wins the round. A win adds 1 to a score variable and then both players scores are evaluated
//* Logic for a tie and a typo are also added
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
