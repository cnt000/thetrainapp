import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import Train from './train';
import store from '../store';

const mock = {
  serviceIdentifier: 1234,
  serviceOperator: 'sdfsdf',
  transportMode: 'asdada',
  callingType: 'dddd'
};

storiesOf('Train Story', module).add('Train', () => (
  <Provider store={store}>
    <Train data={mock} onClick={() => alert(1)} />
  </Provider>
));
