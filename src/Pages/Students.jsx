import React from 'react'
import StudentDiv from '../Components/StudentDiv/StudentDiv'
import './CSS/Students.css'
import InsertButton from '../Components/InsertButton/InsertButton'
import { Link } from 'react-router-dom'

const Students = () => {
  return (
    <div className='students'>
       <h2>Check Student Details</h2>
       <div className="studentdiv-titles">
         <h3>Adm_no</h3>
         <h3>Name</h3>
         <h3>Room_no</h3>
         <h3>Place</h3>
         <h3>Contact_no</h3>
       </div>
       <StudentDiv/>
       <Link to={'/studentform'}><InsertButton content='Students'/></Link>
    </div>
  )
}

export default Students
