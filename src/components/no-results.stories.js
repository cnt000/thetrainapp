import React from 'react'
import { storiesOf } from '@storybook/react'
import NoResults from './no-results'

storiesOf('NoResults Box', module)
  .add('with No results', () => (
    <NoResults isLoading={false} len={0} error="" />
  ))
  .add('with results (empty)', () => (
    <NoResults isLoading={false} len={1} erorr="" />
  ))
  .add('with error (empty)', () => (
    <NoResults isLoading={false} len={1} erorr="Error occurred" />
  ))
  .add('isLoading true (empty)', () => (
    <NoResults isLoading={true} len={1} erorr="" />
  ))
