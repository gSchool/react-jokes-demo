import React from 'react';
import ReactDOM from 'react-dom';
import AddJokeForm from './AddJokeForm';

import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('AddJokeForm', () => {
  it('calls addJoke when the button clicked ', () => {
    const addJoke = jest.fn()

    const wrapper = shallow(<AddJokeForm.WrappedComponent addJoke={ addJoke } />)

    // simulate  onSubmit
    let event = {
      preventDefault: () => console.log('preventDefault'),
      target: {
        question: {value: 'testing'},
        answer: {value: '1234'},
        reset: () => console.log('reset'),
      }
    }

    wrapper.find('form').simulate('submit', event)

    expect(addJoke.mock.calls.length).toBe(1)
  })
})
