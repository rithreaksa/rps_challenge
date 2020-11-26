export const ROCK = "rock";
export const PAPER = "paper";
export const SCISSORS = "scissors";
export const WON = "won";
export const LOST = "lost";
export const DRAW = "draw";

export function getComputerChoice() {
  const choices = [ROCK, PAPER, SCISSORS];
  return choices[Math.floor(Math.random() * 3)];
}

export function getResult(player, computer) {
  if (player === ROCK && computer === SCISSORS) return WON;
  if (player === PAPER && computer === ROCK) return WON;
  if (player === SCISSORS && computer === PAPER) return WON;
  if (computer === ROCK && player === SCISSORS) return LOST;
  if (computer === PAPER && player === ROCK) return LOST;
  if (computer === SCISSORS && player === PAPER) return LOST;
  return DRAW;
}
