import React, { useState } from 'react';
import './App.css';
import Calculator from './components/calculator';
import calculate from './components/logic/calculate';

const App = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleChange = (e) => {
    const data = calculate({ total, next, operation }, e);
    setTotal(data.total);
    setNext(data.next);
    setOperation(data.operation);
  };

  return (
    <Calculator
      clickHandler={handleChange}
      total={total}
      next={next}
      operation={operation}
    />
  );
};

export default App;
