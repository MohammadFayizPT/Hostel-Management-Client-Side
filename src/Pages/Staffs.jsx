import React from 'react';
import './CSS/Staffs.css'; // Import the CSS file
import StaffDiv from '../Components/StaffDiv/StaffDiv'; // Import the StaffDiv component if it's in a separate file
import InsertButton from '../Components/InsertButton/InsertButton'
import { Link } from 'react-router-dom'

const Staffs = () => {
  return (
    <div className='staffs'>
        <h2>Check Staff Details</h2>
        <div className="staffdiv-titles">
          <h3>Staff ID</h3>
          <h3>Name</h3>
          <h3>Type</h3>
          <h3>Salary</h3>
        </div>
        <StaffDiv />
        <Link to={'/stafform'}><InsertButton content='staff'/></Link>
      </div>
  );
};

export default Staffs;
