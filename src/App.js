import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './App.css';
import Jokes from './components/Jokes'
import { getJokes } from './actions'
import AddJokeForm from './containers/AddJokeForm'

class App extends Component {

  async componentDidMount() {
    this.props.getJokes()
  }

  render() {
    return (
      <div className="App">
        <h1>Jokes</h1>
        <Jokes />
        <AddJokeForm />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getJokes }, dispatch)

export default connect(null, mapDispatchToProps)(App);
