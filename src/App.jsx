import React from "react";

import Name from "./components/Name";
import { getComputerChoice, getResult } from "./game-logic";
import { useLocalStorageObjectStates } from "./helpers/local-storage";
import Home from "./Home";

const defaultState = {
  result: null,
  playerChoice: null,
  computerChoice: null,
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
    setState({
      ...state,
      playerChoice,
      computerChoice,
      result: getResult(playerChoice, computerChoice),
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
