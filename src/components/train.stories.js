import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import format from 'date-fns/format'
import Train from './train'
import store from '../store'

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

function getToday() {
  return format(new Date(), 'YYYY-MM-DD')
}

storiesOf('Train Story', module).add('Train', () => (
  <Provider store={store}>
    <Router>
      <div>
        <Train
          data={mock}
          day={getToday()}
          onClick={action(mock.serviceIdentifier)}
        />
      </div>
    </Router>
  </Provider>
))
