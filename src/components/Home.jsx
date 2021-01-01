import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import Game from './Game';
import Head from './Head';

const Home = ({ onClickHandler }) => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Head />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Game onClickHandler={onClickHandler} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Home;
