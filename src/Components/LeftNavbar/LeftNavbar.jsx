import React from 'react'
import './LeftNavbar.css'
import home_icon from '../Assets/home.svg'
import student_icon from '../Assets/students.svg'
import staff_icon from '../Assets/staff.svg'
import room_icon from '../Assets/room.svg'
import complaint_icon from '../Assets/complaint.svg'
import logout_icon from '../Assets/logout.svg'
import fee_icon from '../Assets/indian-rupee-sign-solid.svg'
import {Link} from 'react-router-dom'

const LeftNavbar = () => {
  return (
    <div className='leftnavbar'>
          <div>
             <img src={home_icon} alt="" />
             <Link to='/home' style={{textDecoration:'none', color:'rgb(82, 82, 98)'}}><h2>Home</h2></Link>
          </div>
          <div>
             <img src={student_icon} alt="" />
             <Link to='/students' style={{textDecoration:'none', color:'rgb(82, 82, 98)'}}><h2>Students</h2></Link>
          </div>
          <div>
             <img src={staff_icon} alt="" />
             <Link to='/staffs' style={{textDecoration:'none', color:'rgb(82, 82, 98)'}}><h2>Staffs</h2></Link>
          </div>
          <div>
             <img src={room_icon} alt="" />
             <Link to='/rooms' style={{textDecoration:'none', color:'rgb(82, 82, 98)'}}><h2>Rooms</h2></Link>
          </div>
          <div>
             <img src={fee_icon} alt="" />
             <Link to='/feepayments' style={{textDecoration:'none', color:'rgb(82, 82, 98)'}}><h2>Fees</h2></Link>
          </div>
          <div>
             <img src={complaint_icon} alt="" />
             <Link to='/complaints' style={{textDecoration:'none', color:'rgb(82, 82, 98)'}}><h2>Complaints</h2></Link>
          </div>
          <div>
             <img src={logout_icon} alt="" />
             <Link to='/' style={{textDecoration:'none', color:'rgb(82, 82, 98)'}}><h2>Logout</h2></Link>
          </div>
    </div>
  )
}

export default LeftNavbar
