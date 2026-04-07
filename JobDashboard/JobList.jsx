import React from 'react';
import {useState} from 'react';
import JobCard from './JobCard.jsx';
function JobList({ jobs, setJobs, onDelete }){
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  
  const sortedJobs = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
    
    setJobs((prev) =>{
      return [...prev].sort((a,b) =>{
        if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
        if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
        return 0;
      });
    });
  }
  
  return(
    <div>
     <button onClick={() => {
       sortedJobs('companyName');
     }}>Sorted on Company Name : ({sortOrder})</button>
      
      <button onClick={() => {
       sortedJobs('status');
     }}>Sorted on status : ({sortOrder})</button>
     
      {jobs.length === 0 ? <p>No jobs found</p> :
           <ul>
           {jobs.map((job) =>(
            <JobCard 
             key={job.id}
             job={job}
             onDelete={onDelete}
           />
          ))}
        </ul>}
      
    </div>
    
    );
}

export default JobList;