import React from "react";
import { Button, Grid } from "semantic-ui-react";

import Result from "./Result";

const Play = ({ result, playerChoice, computerChoice, onClickHandler }) => {
  let resultComponent = <></>;
  if (playerChoice && computerChoice && result) {
    resultComponent = (
      <Result
        result={result}
        playerChoice={playerChoice}
        computerChoice={computerChoice}
      />
    );
  }

  return (
    <Grid padded>
      <Grid.Row>{resultComponent}</Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Button fluid onClick={onClickHandler} name="rock" id="rock">
            ✊🏽 <br /> Rock
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid onClick={onClickHandler} name="paper" id="paper">
            ✋🏽 <br /> Paper
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid onClick={onClickHandler} name="scissors" id="scissors">
            ✌🏽 <br /> Scissors
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Play;
