import React, { useState, useEffect } from 'react';

import './CSS/StaffDetails.css'; // Import the CSS file

const StaffDetails = () => {
  const [staffDetails, setStaffDetails] = useState([]);

  useEffect(() => {
    // Fetch fee payments data from the server
    fetch('http://localhost:3001/staffs') // Adjust the endpoint URL according to your server
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check the data structure in the console
        setStaffDetails(data);
      })
      .catch(error => console.error('Error fetching staffs:', error));
  }, []);

  return (
    <div className='staffs'>
      <h1>Staff Details</h1>
      <div>
        <table>
          <thead>
            <tr className='row-headst'>
              <th>Staff ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {staffDetails.map(staff => (
              <tr key={staff.Staff_id} className='rowst'>
                <td className='td1'>{staff.Staff_id}</td>
                <td className='td2'>{staff.Name}</td>
                <td className='td3'>{staff.Type}</td>
                <td className='td4'>{staff.Salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffDetails;
