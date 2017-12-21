import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Train from '../../src/components/train'

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

describe('Train', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Train data={mock} onClick={() => console.log('clicked')} />,
      div
    )
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Train data={mock} onClick={() => console.log('clicked')} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
