import React from "react";
import { Container, Grid } from "semantic-ui-react";

import Game from "./Game";
import Head from "./Head";

const Home = ({
  name,
  result,
  playerChoice,
  computerChoice,
  onLogoutHandler,
  onClickHandler,
  player,
  computer,
}) => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Head name={name} onLogoutHandler={onLogoutHandler} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Game
              result={result}
              playerChoice={playerChoice}
              computerChoice={computerChoice}
              player={player}
              computer={computer}
              onClickHandler={onClickHandler}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Home;
