import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  const [numberPlus, setNumberPlus] = useState<number>(0)

  const handlePlus = () => {
    try {
      setNumberPlus(prevNumber => prevNumber + 1);
    } catch (error) {
      console.log(error)
    }
  }

  const handleMinus = () => {
    try {
      if (numberPlus == 0) {
        return
      } else {
        setNumberPlus(prevNumber => prevNumber - 1);
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="App">
      <span className='title'>COUNT</span>
      <div className='content'>
        <button className='btn-minus' onClick={handleMinus}>-</button>
        <span className='hasil'>{numberPlus}</span>
        <button className='btn-plus' onClick={handlePlus}>+</button>
      </div>
    </div>
  );
}

export default App;
