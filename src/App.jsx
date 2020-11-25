import "semantic-ui-css/semantic.min.css";

import React from "react";
import { Button, Container, Grid, Header, Message } from "semantic-ui-react";

import Game from "./game";

function App() {
  const [state, setState] = React.useState({
    playerChoice: "",
    machineChoice: "",
  });

  const onClickHandler = (event) => {
    event.preventDefault();
    setState({
      playerChoice: event.target.name,
      machineChoice: Game.getMachineChoice(),
    });
  };

  return (
    <>
      <Header></Header>
      <Container>
        <Grid segment centered padded>
          <Grid.Row>
            <Button
              onClick={onClickHandler}
              size="massive"
              name="rock"
              id="rock"
            >
              👊🏽 Rock
            </Button>
            <Button
              onClick={onClickHandler}
              size="massive"
              name="paper"
              id="paper"
            >
              ✋🏽 Paper
            </Button>
            <Button
              onClick={onClickHandler}
              size="massive"
              name="scissors"
              id="scissors"
            >
              ✌🏽 Scissors
            </Button>
          </Grid.Row>
          <Grid.Row>
            {renderMessage(state.playerChoice, state.machineChoice)}
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

function renderMessage(player, machine) {
  if (player == null || machine == null) {
    return;
  }

  const playerMessage = `(Player) ${player}`;
  const machineMessage = `(Machine) ${machine}`;

  return (
    <Message info size="massive">
      <p>
        <span id="player">{playerMessage}</span> vs {machineMessage}
      </p>
      <p id="result">{Game.getResult(player, machine)}</p>
    </Message>
  );
}

export default App;
