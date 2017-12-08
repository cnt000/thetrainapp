import React from 'react'
import { storiesOf } from '@storybook/react'
import Loader from './loader'

storiesOf('Loader', module)
  .add('Loader is Loading', () => <Loader isLoading />)
  .add('Loader is Loaded (empty)', () => <Loader isLoading={false} />)
