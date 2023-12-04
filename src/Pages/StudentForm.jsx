import React,{useState} from 'react'
import './CSS/StudentForm.css'
import axios from '../axios'
import backendURL from '../Constants/constants'

const StudentForm = () => {
  const [formData, setFormData] = useState({
    admissionNo: '',
    name: '',
    department: 'Select',
    semester: 'Select',
    roomNo: '',
    phoneNo: '',
    place: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      // Make sure required fields are filled before submitting
      if (formData.admissionNo && formData.name && formData.department !== 'Select' && formData.semester !== 'Select') {
        try {
          console.log('Form Data:', formData);
          const response = await axios.post(backendURL, formData, {
            
          });
  
          if (response.status === 200) {
            // Data submitted successfully
            console.log('Data submitted successfully');
            // You can reset the form here if needed
          } else {
            // Handle errors if any
            console.error('Error occurred while submitting data');
          }
        } catch (error) {
          console.error('Error occurred while submitting data:', error);
        }
      } else {
        // Handle validation errors or show messages to the user
        alert('All are required fields');
        console.error('Please fill in all required fields');
      }
    };

  return (
    <div className='studentform'>
      <h2>Admit New Student Here</h2>
        <form className="studentform-child" onSubmit={handleSubmit}>
          <input type="text" name='admissionNo' value={formData.admissionNo} onChange={handleChange}placeholder='Admission_no'/>
          <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Name'/>
         
         <div className='dropdown'>
          <label htmlFor="department">Department</label>
          <select id="department" name="department" value={formData.department} onChange={handleChange}>
            <option value="Select">Select</option>
            <option value="CS">CS</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
            <option value="CHEM">CHEM</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
          </select>
          
          <label htmlFor="sem">Semester</label>
          <select id="sem" name="semester" value={formData.semester} onChange={handleChange}>
            <option value="Select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          </div>

          <input type="text" name='roomNo' value={formData.roomNo} onChange={handleChange} placeholder='Room_no'/>
          <input type="text" name='phoneNo' value={formData.phoneNo} onChange={handleChange} placeholder='Phone_no' />
          <input type="text" name='place' value={formData.place} onChange={handleChange} placeholder='Place' />
          <button type='submit'>Add</button>
          </form>
        </div>
  )
}

export default StudentForm
