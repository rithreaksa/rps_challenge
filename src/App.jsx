import React from "react";

import Home from "./components/Home";
import Name from "./components/Name";
import { getComputerChoice, getResult } from "./helpers/game-logic";
import { useLocalStorageObjectStates } from "./helpers/local-storage";

const defaultState = {
  result: null,
  playerChoice: null,
  computerChoice: null,
  player: { won: 0, lost: 0, draw: 0, rock: 0, paper: 0, scissors: 0 },
  computer: { won: 0, lost: 0, draw: 0, rock: 0, paper: 0, scissors: 0 },
};

const App = () => {
  const [state, setState] = useLocalStorageObjectStates("rps");

  const onNameSubmit = (event) => {
    event.preventDefault();
    setState({
      ...defaultState,
      name: event.target.name.value.trim(),
    });
  };

  const onLogout = (event) => {
    event.preventDefault();
    setState({});
  };

  const onClick = (event) => {
    event.preventDefault();
    const playerChoice = event.target.name;
    const computerChoice = getComputerChoice();
    const playerResult = getResult(playerChoice, computerChoice);
    const computerResult = getResult(computerChoice, playerChoice);
    const player = { ...state.player };
    player[playerChoice] = player[playerChoice] + 1;
    player[playerResult] = player[playerResult] + 1;
    const computer = { ...state.computer };
    computer[computerChoice] = computer[computerChoice] + 1;
    computer[computerResult] = computer[computerResult] + 1;

    setState({
      ...state,
      playerChoice,
      computerChoice,
      result: playerResult,
      player,
      computer,
    });
  };

  if (state.name) {
    return (
      <Home {...state} onLogoutHandler={onLogout} onClickHandler={onClick} />
    );
  }

  return <Name onSubmitHandler={onNameSubmit} />;
};

export default App;
