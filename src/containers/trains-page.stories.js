import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import TrainsPage from './trains-page';
import store from '../store';

storiesOf('TrainsPage Container', module).add('TrainsPage', () => (
  <Provider store={store}>
    <TrainsPage />
  </Provider>
));
