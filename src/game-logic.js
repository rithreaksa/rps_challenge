const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WON = "won";
const LOST = "lost";
const DRAW = "draw";

function getMachineChoice() {
  const choices = [ROCK, PAPER, SCISSORS];
  return choices[Math.floor(Math.random() * 3)];
}

function getResult(user, machine) {
  if (user === ROCK && machine === SCISSORS) return WON;
  if (user === PAPER && machine === ROCK) return WON;
  if (user === SCISSORS && machine === PAPER) return WON;
  if (machine === ROCK && machine === SCISSORS) return LOST;
  if (machine === PAPER && machine === ROCK) return LOST;
  if (machine === SCISSORS && machine === PAPER) return LOST;
  return DRAW;
}

const Game = { getMachineChoice, getResult };

export default Game;
