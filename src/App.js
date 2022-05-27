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
    console.log(data);
  }

  render() {
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;
    return (
      <Calculator
        clickHandler={this.handleChange}
        total={total}
        next={next}
        operation={operation}
      />
    );
  }
}

export default App;
