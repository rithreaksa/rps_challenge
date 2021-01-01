import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Message } from 'semantic-ui-react';

import { getComputerChoice, getResult } from '../modules/game-logic';
import Result from './Result';

const Play = () => {
  const game = useSelector((state) => state.game);
  const playResult = useSelector((state) => state.playResult);
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    event.preventDefault();
    const playerChoice = event.target.name;
    const computerChoice = getComputerChoice();
    const playerResult = getResult(playerChoice, computerChoice);
    const computerResult = getResult(computerChoice, playerChoice);
    const player = { ...playResult.player };
    player[playerChoice] = player[playerChoice] + 1;
    player[playerResult] = player[playerResult] + 1;
    const computer = { ...playResult.computer };
    computer[computerChoice] = computer[computerChoice] + 1;
    computer[computerResult] = computer[computerResult] + 1;
    dispatch({
      type: 'SET_GAME_RESULT',
      payload: {
        game: {
          result: playerResult,
          playerChoice,
          computerChoice,
        },
        playResult: {
          player,
          computer,
        },
      },
    });
  };

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
