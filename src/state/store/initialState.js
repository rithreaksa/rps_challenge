const initialState = {
  game: {
    result: null,
    playerChoice: null,
    computerChoice: null,
  },
  player: { won: 0, lost: 0, draw: 0, rock: 0, paper: 0, scissors: 0 },
  computer: { won: 0, lost: 0, draw: 0, rock: 0, paper: 0, scissors: 0 },
};

export default initialState;
