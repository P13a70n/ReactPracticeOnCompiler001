import React from 'react';
import { useState } from 'react'
import GiverChild from './ChildB.jsx';
import TakerChild from './ChildA.jsx';

//GiverChild will give the data and pass to taker child
function App() {
  const [dataFromGiver, setDataFromGiver] = useState('');
  const handleDataFromChildB = (data) => {
    setDataFromGiver(data);
   }


  return (
    <>
      <GiverChild 
      onData={handleDataFromChildB}
      onClear={() => setDataFromGiver('')}/>
      <p>Parent is in the middle and is from childB : {dataFromGiver}</p>
      <TakerChild message={dataFromGiver}/>
    </>
  );
}

export default App
