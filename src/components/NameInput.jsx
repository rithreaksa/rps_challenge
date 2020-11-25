import React from "react";
import { Container, Form, Grid } from "semantic-ui-react";

const NameInput = () => {
  return (
    <Container>
      <Grid padded>
        <Grid.Column textAlign="center">
          <Form>
            <Form.Input id="name" name="name" placeholder="Name" />
            <Form.Button id="play">Play</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default NameInput;
