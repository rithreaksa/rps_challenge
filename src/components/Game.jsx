import React from 'react';
import { Grid } from 'semantic-ui-react';

import Play from './Play';
import RadarChart from './RadarChart';

const Game = () => {
  return (
    <Grid centered columns={2} divided stackable>
      <Grid.Column>
        <Play />
      </Grid.Column>
      <Grid.Column>
        <RadarChart />
      </Grid.Column>
    </Grid>
  );
};

export default Game;
