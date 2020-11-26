import React from "react";
import { Grid, Message } from "semantic-ui-react";

import RadarChart from "./components/RadarChart";
import Play from "./Play";

const Game = ({
  name,
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
          player={player}
          computer={computer}
          onClickHandler={onClickHandler}
        />
      </Grid.Column>
      <Grid.Column>
        <RadarChart name={name} player={player} computer={computer} />
      </Grid.Column>
    </Grid>
  );
};

export default Game;
