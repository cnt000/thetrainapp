import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Stop from '../../src/components/stop'

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

describe('Stop', () => {
  it('renders without crashing middle station', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Stop stop={mockStop} isFirst={false} isLast={false} />,
      div
    )
  })

  test('has a valid snapshot middle station', () => {
    const component = renderer.create(
      <Stop stop={mockStop} isFirst={false} isLast={false} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('has a valid snapshot start station', () => {
    const component = renderer.create(
      <Stop stop={mockStop} isFirst isLast={false} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('has a valid snapshot end station', () => {
    const component = renderer.create(
      <Stop stop={mockStop} isFirst={false} isLast />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
