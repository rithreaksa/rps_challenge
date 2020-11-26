import React from "react";
import { Button, Grid, Header } from "semantic-ui-react";

const Head = ({ name, onLogoutHandler }) => {
  return (
    <Grid padded>
      <Grid.Row columns={3}>
        <Grid.Column></Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="center">
          <Header id="name">Hello {name}!</Header>
        </Grid.Column>
        <Grid.Column textAlign="right">
          <Button id="logout" onClick={onLogoutHandler}>
            Logout
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Head;