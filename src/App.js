/* eslint react/prefer-stateless-function: [0] */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import calculate from './components/logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const data = calculate(this.state, e);
    this.setState(data);
  }

  render() {
    return (
      <Calculator clickHandler={this.handleChange} {...this.state} />
    );
  }
}

export default App;
