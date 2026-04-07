import React from 'react';

function JobCard({ job, onDelete }){
  
  return (
    <div>
      <p>{job.companyName} - {job.role}</p>
      <p>Status: {job.status}</p>
      
      <button onClick={() =>onDelete(job.id)}>Delete</button>
      <hr />
    </div>
    );
}

export default JobCard;