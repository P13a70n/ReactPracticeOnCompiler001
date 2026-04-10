import React from 'react';
import {useState } from 'react';

function GiverChild({onData, onClear}) {
  const [send, setSend] = useState(false)
  const [data, setData] = useState('');
  
  const sendDataToParent = () => {
   if(send === false) {
     onData(data);
     setData('')
     } else{
       onClear();
     }
     setSend(prev => !prev);
  }
  return(
    <>
      <button onClick={sendDataToParent}>{send ? "Take it" : "Give it"}</button> {' '}
      <input 
      type='text'
      value={data}
      onChange={(e) => setData(e.target.value)}
      placeholder='Enter the data'
      />
     {send ? (<p>Send the data, recieved it</p>) : <p>Not yet</p>}
    </>
    );
}

export default GiverChild;