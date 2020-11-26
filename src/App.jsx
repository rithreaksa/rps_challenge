import React from "react";

import NamePage from "./components/NamePage";
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
  };

  if (state.name) {
    return (
      <Home {...state} onLogoutHandler={onLogout} onClickHandler={onClick} />
    );
  }

  return <NamePage onSubmitHandler={onNameSubmit} />;
};

export default App;
