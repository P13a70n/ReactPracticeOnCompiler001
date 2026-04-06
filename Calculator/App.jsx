import React from 'react';
import { useState } from 'react'
import '/styles.css';

function App() {
  const [input, setInput] = useState("");

  // this will act for every key when they click like eventListener
  const handleClick = (value) => {
    setInput(input + value)
  }

  // whatever we got in a string with the eval() method we are calculating
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    }
    catch {
      setInput("Error");
    }
  }

  // to clear all the strings
  const clear = () => {
    setInput("");
  }

  // to del the last value, we know that if we pass -ve in the end then it will start from end
  const backspace = () => {
    setInput(input.slice(0, -1));
  }


  //for passing every value this condition will take common
  const handleButtonClick = (value) => {
    if (value === 'C') {
      clear();
    } else if (value === 'DEL') {
      backspace();
    } else if (value === '=') {
      calculate();
    } else {
      handleClick(value);
    }
  }

  // here we give all the buttons so that we can map them to recude the codes and eassy for debugging
  const buttons = [
    "1", "2", "3", "+",
    "4", "5", "6", "-",
    "7", "8", "9", "*",
    "0", "C", "=", "/"];

  return (
    <>
      <input 
      placeholder='Enter the number' 
      width='90' value={input} 
      onChange={(e) => setInput(e.target.value)} />

      <div className="top-header">
        <button onClick={backspace}>DEL</button>
        <button onClick={() => handleClick(".")} >.</button>
      </div>
      
      <div className="calculator">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(btn)}
            className={btn === '=' ? 'equals' : ''}
          >{btn}</button>))}
      </div>
    </>
  );
}

export default App
