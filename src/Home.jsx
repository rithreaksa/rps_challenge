import React from "react";
import { Button, Container, Grid, Header } from "semantic-ui-react";

const Home = ({ name, onLogoutHandler }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default Home;
