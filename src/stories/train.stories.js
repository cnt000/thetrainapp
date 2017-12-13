import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Train from '../components/train'

const mock = {
  serviceIdentifier: 'W35422',
  serviceOperator: 'SW',
  transportMode: 'TRAIN',
  scheduledInfo: {
    scheduledTime: '2017-12-03T20:39:00+00:00',
    scheduledPlatform: '17'
  },
  callingType: 'PickUp',
  destinationList: [
    {
      crs: 'SNS'
    }
  ],
  realTimeUpdatesInfo: {
    realTimeServiceInfo: {
      realTime: '2017-12-03T20:39:00+00:00',
      realTimePlatform: '17',
      realTimeFlag: 'Estimate'
    }
  },
  callingPatternUrl:
    'https://realtime.thetrainline.com/callingPattern/W35422/2017-12-03'
}

storiesOf('Train Story', module).add('Train', () => (
  <Train data={mock} onClick={() => console.log('clicked')} />
))
