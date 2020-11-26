import React from "react";
import { Grid } from "semantic-ui-react";

import Play from "./Play";

const Game = ({ result, playerChoice, computerChoice, onClickHandler }) => {
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
      <Grid.Column></Grid.Column>
    </Grid>
  );
};

export default Game;
