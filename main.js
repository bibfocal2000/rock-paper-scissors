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
