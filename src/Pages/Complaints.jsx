import React, { useState, useEffect } from 'react';
import "./CSS/Complaints.css";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Fetch complaints data from the server
    fetch('http://localhost:3001/complaints')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check the data structure in the console
        setComplaints(data);
      })
      .catch(error => console.error('Error fetching complaints:', error));
  }, []);

  return (
    <div className='complaint'>
    
      <h2> Check Complaints</h2>
     
     <div>
      <table>
  <thead>
    <tr className='row-head'>
      <th>Comp_id</th>
      <th>Student_id</th>
      <th>Date</th>
      <th>Issue</th>
      <th className='th5'>Status</th>
    </tr>
  </thead>
  <tbody>
    {complaints.map(complaint => (
      <tr key={complaint.Comp_id} className="row">
        <td className='td1'>{complaint.Comp_id}</td>
        <td className='td2'>{complaint.Student_id}</td>
        <td className='td3'>{complaint.Date}</td>
        <td className='td4'>{complaint.Issue}</td>
        <td className={`td5 ${complaint.Status ? 'solved' : 'pending'}`}>
         {complaint.Status ? 'Solved' : 'Pending'}
       </td>
      </tr>
    ))}
  </tbody>
</table>
</div>

    </div>
  );
};

export default Complaints;