import React from "react";
import { Button, Grid } from "semantic-ui-react";

const Play = ({ onClickHandler }) => {
  return (
    <Grid padded>
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
