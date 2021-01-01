import React from 'react';
import { useSelector } from 'react-redux';

import Home from './components/Home';
import Name from './components/Name';
import { getComputerChoice, getResult } from './modules/game-logic';

const App = () => {
  const state = useSelector((state) => state);

  const onLogout = (event) => {
    event.preventDefault();
    // setState({});
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

    // setState({
    //   ...state,
    //   playerChoice,
    //   computerChoice,
    //   result: playerResult,
    //   player,
    //   computer,
    // });
  };

  if (state.name) {
    return (
      <Home {...state} onLogoutHandler={onLogout} onClickHandler={onClick} />
    );
  }

  return <Name />;
};

export default App;
