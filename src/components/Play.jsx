import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Grid, Message } from 'semantic-ui-react';

import Result from './Result';

const Play = ({ onClickHandler }) => {
  let game = useSelector((state) => state.game);
  let playResult = useSelector((state) => state.playResult);

  return (
    <Grid padded>
      <Grid.Row>{game ? <Result /> : <></>}</Grid.Row>
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
      <Grid.Row>
        <Message>{JSON.stringify(playResult, null, 2)}</Message>
      </Grid.Row>
    </Grid>
  );
};

export default Play;
