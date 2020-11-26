export const ROCK = "rock";
export const PAPER = "paper";
export const SCISSORS = "scissors";
export const WON = "won";
export const LOST = "lost";
export const DRAW = "draw";

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
