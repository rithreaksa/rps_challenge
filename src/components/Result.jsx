import React from "react";
import { Grid, Header, Message } from "semantic-ui-react";

import { DRAW, LOST, PAPER, ROCK, SCISSORS, WON } from "../modules/game-logic";

const Play = ({ result, computerChoice, playerChoice }) => {
  const getResultText = (result) => {
    if (result === WON) return "Won";
    if (result === LOST) return "Lost";
    if (result === DRAW) return "Draw";
  };

  const getChoiceText = (choice) => {
    if (choice === ROCK) return "Rock";
    if (choice === PAPER) return "Paper";
    if (choice === SCISSORS) return "Scissors";
  };

  const getChoiceEmoji = (choice) => {
    if (choice === ROCK) return "✊🏽";
    if (choice === PAPER) return "✋🏽";
    if (choice === SCISSORS) return "✌🏽";
  };

  return (
    <Grid padded textAlign="center">
      <Grid.Row>
        <Grid.Column>Computer chose</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Message id="computer" color={result === LOST ? "teal" : "grey"}>
            <Message.Header>{getChoiceEmoji(computerChoice)}</Message.Header>
            {getChoiceText(computerChoice)}
          </Message>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header id="result" color="teal" size="huge">
            You {getResultText(result)}!
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>You chose</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Message id="player" color={result === WON ? "teal" : "grey"}>
            <Message.Header>{getChoiceEmoji(playerChoice)}</Message.Header>
            {getChoiceText(playerChoice)}
          </Message>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Play;
