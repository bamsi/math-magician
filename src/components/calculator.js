import React from 'react';
import PropTypes from 'prop-types';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.onClickCall = this.onClickCall.bind(this);
  }

  onClickCall = (e) => {
    const { clickHandler } = this.props;
    clickHandler(e.target.value);
  }

  render() {
    const { total } = this.props;
    const { next } = this.props;
    const { operation } = this.props;
    const buttons = [
      { style: '', value: 'AC' },
      { style: '', value: '+/-' },
      { style: '', value: '%' },
      { style: 'operation', value: '÷' },
      { style: '', value: '7' },
      { style: '', value: '8' },
      { style: '', value: '9' },
      { style: 'operation', value: 'x' },
      { style: '', value: '4' },
      { style: '', value: '5' },
      { style: '', value: '6' },
      { style: 'operation', value: '-' },
      { style: '', value: '1' },
      { style: '', value: '2' },
      { style: '', value: '3' },
      { style: 'operation', value: '+' },
      { style: 'zero', value: '0' },
      { style: '', value: '.' },
      { style: 'operation', value: '=' },
    ];
    const items = [];
    buttons.forEach((button) => {
      items.push(<button type="button" value={button.value} className={button.style} onClick={this.onClickCall}>{button.value}</button>);
    });
    return (
      <div className="wrapper">
        <button className="result" type="button">
          { total }
          { operation }
          { next }
        </button>
        {items}
      </div>
    );
  }
}

Calculator.propTypes = {
  total: PropTypes.number,
  next: PropTypes.string,
  operation: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Calculator.defaultProps = {
  total: null,
  next: null,
  operation: null,
};

export default Calculator;
