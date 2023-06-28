import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [doubleNum, setDoubleNum] = useState(0);

  useEffect(()=>{
    console.log("use effect triggered");
    setDoubleNum(number *2);
  },[number])


  const handleInc = () => {
    setNumber(number + 1);
  };

  const handleDec = () => {
    setNumber(number - 1);
  };

  return (
    <div className="container">
      <h1 className="title">INCREMENT & DECREMENT COUNTER</h1>
      <div className="counter">
        <button className="button" onClick={handleDec}>
          -
        </button>
        <h2 className="number">Number is {number}</h2>
        <button className="button" onClick={handleInc}>
          +
        </button>
      </div>
      <h2 className="double-number">Double num is: {doubleNum}</h2>
    </div>
  );
}

export default App;
