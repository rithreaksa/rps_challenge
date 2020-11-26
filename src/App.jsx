import React from "react";

import NamePage from "./components/NamePage";
import { useLocalStorageObjectStates } from "./helpers/local-storage";
import Home from "./Home";

const App = () => {
  const [state, setState] = useLocalStorageObjectStates("rps");

  const onNameSubmit = (event) => {
    event.preventDefault();
    setState({
      name: event.target.name.value.trim(),
    });
  };

  const onLogout = (event) => {
    event.preventDefault();
    setState({});
  };

  if (state.name) {
    return <Home {...state} onLogoutHandler={onLogout} />;
  }

  return <NamePage onSubmitHandler={onNameSubmit} />;
};

export default App;
