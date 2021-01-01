import { useSelector } from 'react-redux';
import { Table } from 'semantic-ui-react';

const TableResult = () => {
  const playResult = useSelector((state) => state.playResult);

  return (
    <Table singleLine color="teal">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Won</Table.HeaderCell>
          <Table.HeaderCell>Lost</Table.HeaderCell>
          <Table.HeaderCell>Draw</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Player</Table.Cell>
          <Table.Cell>{playResult.player.won}</Table.Cell>
          <Table.Cell>{playResult.player.lost}</Table.Cell>
          <Table.Cell>{playResult.player.draw}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Computer</Table.Cell>
          <Table.Cell>{playResult.computer.won}</Table.Cell>
          <Table.Cell>{playResult.computer.lost}</Table.Cell>
          <Table.Cell>{playResult.computer.draw}</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Paper</Table.HeaderCell>
          <Table.HeaderCell>Scissors</Table.HeaderCell>
          <Table.HeaderCell>Rock</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Player</Table.Cell>
          <Table.Cell>{playResult.player.paper}</Table.Cell>
          <Table.Cell>{playResult.player.scissors}</Table.Cell>
          <Table.Cell>{playResult.player.rock}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Computer</Table.Cell>
          <Table.Cell>{playResult.computer.paper}</Table.Cell>
          <Table.Cell>{playResult.computer.scissors}</Table.Cell>
          <Table.Cell>{playResult.computer.rock}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default TableResult;
