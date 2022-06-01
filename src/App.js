import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Header from './components/Header';
import Home from './components/Home';
import calculate from './components/logic/calculate';
import Quote from './components/Quote';

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
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/calculator"
          element={(
            <Calculator
              clickHandler={handleChange}
              total={total}
              next={next}
              operation={operation}
            />
          )}
        />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
};

export default App;
