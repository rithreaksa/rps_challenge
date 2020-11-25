import React from "react";

import NameInput from "./components/NameInput";
import { useLocalStorageObjectStates } from "./helpers/local-storage";

const App = () => {
  const [state, setState] = useLocalStorageObjectStates("rps");

  const onNameSubmit = (event) => {
    setState({
      name: event.target.name.value.trim(),
    });
  };

  if (state.name) {
    return <p id="name">{state.name}</p>;
  }

  return <NameInput onSubmitHandler={onNameSubmit} />;
};

export default App;
