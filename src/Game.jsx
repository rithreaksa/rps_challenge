import React from "react";
import { Grid, Message } from "semantic-ui-react";

import Play from "./Play";

const Game = ({
  result,
  playerChoice,
  computerChoice,
  player,
  computer,
  onClickHandler,
}) => {
  return (
    <Grid centered columns={2} divided stackable>
      <Grid.Column>
        <Play
          result={result}
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          onClickHandler={onClickHandler}
        />
      </Grid.Column>
      <Grid.Column>
        <Message>{JSON.stringify({ player, computer }, null, 2)}</Message>
      </Grid.Column>
    </Grid>
  );
};

export default Game;
