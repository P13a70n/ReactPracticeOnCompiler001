import React from 'react';
import { useState, useRef } from 'react';

function JobForm({ onAddJob }){
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('Offer');
  
  let refId = useRef(1);
  
  const handleClear = ()=>{
    setCompanyName('');
    setRole('');
    setStatus('Offer');
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!companyName || !role){
      return alert('All fields are required!!');
    }
    
    const newJob = {
      id: refId.current++,
      companyName,
      role,
      status
    }
    
    onAddJob(newJob);
    handleClear();
  }
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name: 
        <input 
        id="companyName"
        placeholder="Enter company name" 
        type="text" 
        value={companyName}
        onChange={(e) =>setCompanyName(e.target.value)}
        />
        </label>
        <br />
         <label htmlFor="role">Role: 
        <input 
        id="role"
        placeholder="Enter role" 
        type="text" 
        value={role}
        onChange={(e) =>setRole(e.target.value)}
        />
        </label>
        <br />
        <label htmlFor="status">
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
            <option value="Interview">Interview</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
      
    </div>

    );
}

export default JobForm;
