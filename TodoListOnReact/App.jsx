import React from 'react';
import { useState, useRef } from 'react'

function App() {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);
  const tasksId = useRef(1);
  //let tasksId = 0;
  
  // to handle the changes on input tag 
  function handleChange(event){
    setName(event.target.value);
  }
  
  // add the task
  function handleAdd(){
    
   
    if(name.trim() == ''){
       alert(`task name can't be empty`);
      return;
    }
    
    const isDuplicate = tasks.some( 
      task => task.name.toLowerCase() === name.toLowerCase()
      )
      
    if(isDuplicate){
      alert(`Task existed`);
      setName('');
      return;
    }
      
    setTasks(prev => [...prev, {id:tasksId.current++, name: name}]);
    setName('');
  }

  // delete button
  function handleDelete(id){
     setTasks(prev => prev.filter(task => task.id !== id));
  }

  // clear all
  function handleClearAll(){
    setTasks([]);
  }
  

  return (
    <>
      <input type='text' placeholder='Add to do list'value={name} onChange={handleChange}/>
      <button type='button' onClick={handleAdd}>Add</button>
      <button type='button' onClick={handleClearAll}>Clear</button>
      <div>
        <ul>
          {tasks.map(task =>(
             <li key={task.id}>{task.id} - {task.name} <button onClick={() => handleDelete(task.id)}
             >Delete</button> 
             </li>
          ))}
        </ul>
        
      </div>
    </>
  )
}

export default App
