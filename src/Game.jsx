import React from "react";
import { Grid } from "semantic-ui-react";

import Play from "./Play";

const Game = ({ onClickHandler }) => {
  return (
    <Grid centered columns={2} divided stackable>
      <Grid.Column>
        <Play onClickHandler={onClickHandler} />
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid>
  );
};

export default Game;
