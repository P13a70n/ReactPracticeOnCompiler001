import React, {useState} from 'react';

function TakerChild({message}) {
  const [show, setShow] = useState(false);
  
  const handleShow = () =>{
    setShow(prev => !prev);
  }
  return(
    <>
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
      {show && <p> Message taken from Parent: {message}</p>}
    </>
    );
}

export default TakerChild;