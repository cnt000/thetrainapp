import React from 'react';
import { storiesOf } from '@storybook/react';
import StopsList from './stops-list';

const stationsListMock = [
  { serviceIdentifier: 12332 },
  { serviceIdentifier: 32399 },
  { serviceIdentifier: 76554 }
];

storiesOf('Stations List', module)
  .add('List Empty', () => <StopsList />)
  .add('List Mock', () => <StopsList stops={stationsListMock} />);
