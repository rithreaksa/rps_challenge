import React from "react";
import { Container, Form, Grid, Header } from "semantic-ui-react";

const Name = ({ onSubmitHandler }) => {
  return (
    <Container>
      <Grid centered style={{ height: "100vh" }}>
        <Grid.Column verticalAlign="middle">
          <Grid centered>
            <Form onSubmit={onSubmitHandler}>
              <Header color="teal">Rock Paper Scissors Game</Header>
              <Form.Input id="name" name="name" placeholder="Name" />
              <Form.Button fluid color="teal" id="play">
                Play
              </Form.Button>
            </Form>
          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Name;
