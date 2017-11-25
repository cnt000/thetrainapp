import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './app'

storiesOf('App Main Story', module)
  .add('App', () => 
    <App />
  )