import React from 'react'
import { storiesOf } from '@storybook/react'
import Stop from './stop'

const mockStop = {
  location: {
    crs: 'WAT'
  },
  arrival: {
    notApplicable: true
  },
  departure: {
    scheduled: {
      scheduledTime: '2017-12-08T22:36:00+00:00',
      scheduledPlatform: '3'
    },
    realTime: {
      realTimeServiceInfo: {
        hasDeparted: true,
        realTime: '2017-12-08T22:37:00+00:00',
        realTimeFlag: 'Actual'
      }
    }
  },
  callingType: 'PickUp'
}

storiesOf('Stop Point', module)
  .add('Middle station', () => (
    <Stop stop={mockStop} isFirst={false} isLast={false} />
  ))
  .add('Start station', () => <Stop stop={mockStop} isFirst isLast={false} />)
  .add('End station', () => <Stop stop={mockStop} isFirst={false} isLast />)
