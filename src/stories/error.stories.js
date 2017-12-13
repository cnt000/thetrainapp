import React from 'react'
import { storiesOf } from '@storybook/react'
import Error from '../components/error'

storiesOf('Error Box', module)
  .add('With Error', () => <Error error="This is an error" />)
  .add('Without Error (empty)', () => <Error error="" />)
