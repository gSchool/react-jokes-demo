import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import renderer from 'react-test-renderer'

const jokesData = [{id:1, question:"What’s a penguin’s favorite salad?", answer:"Iceberg lettuce."}]

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore({
  jokes: jokesData
})

describe('App', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  beforeEach(() => {
    fetchMock.get('end:/jokes', jokesData
    )
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the same way every time', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
