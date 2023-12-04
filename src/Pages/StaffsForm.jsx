import React, { useState } from 'react';
import axios from '../axios'; 
import backendURL from '../Constants/constants'; 
import './CSS/StaffsForm.css'
const StaffCreationForm = () => {
  const [staffData, setStaffData] = useState({
    staff_id: '',
    name: '',
    type: 'Select',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffData({
      ...staffData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (staffData.staff_id && staffData.name && staffData.type !== 'Select' && staffData.salary) {
      try {
        console.log('Staff Data:', staffData);
        const response = await axios.post(backendURL + '/staff', staffData, {
          
        });

        if (response.status === 200) {
          console.log(' Staff data submitted successfully');
          
        } else {
          console.error('Error occurred while submitting staff data');
        }
      } catch (error) {
        console.error('Error occurred while submitting staff data:', error);
      }
    } else {
      alert('All fields are required');
      console.error('Please fill in all required fields');
    }
  };

  return (
    <div className='staff-creation-form'>
      <h2>Admit New Staff Member</h2>
      <form className="staff-creation-form-child" onSubmit={handleSubmit}>
        <input type="text" name='staff_id' value={staffData.staff_id} onChange={handleChange} placeholder='Staff ID' />
        <input type="text" name='name' value={staffData.name} onChange={handleChange} placeholder='Name' />

        <div className='dropdown'>
          <label htmlFor="type">Type</label>
          <select id="type" name="type" value={staffData.type} onChange={handleChange}>
            <option value="Select">Select</option>
            <option value="Security">Security</option>
            <option value="Maintanence">Maintenance</option>
            <option value="Chef">Chef</option>
            <option value="Warden">Warden</option>
            <option value="Administrator">Administrator</option>
            <option value="Deliver Guy">Delivery Guy</option>
          </select>
        </div>

        <input type="text" name='salary' value={staffData.salary} onChange={handleChange} placeholder='Salary' />
        <button type='submit'>Create Staff</button>
      </form>
    </div>
  );
};

export default StaffCreationForm;
