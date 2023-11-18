import React from 'react'
import './Header.css'
import hostel_logo from '../Assets/hostel_logo.svg'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-left">
         <h1>Welcome Admin</h1>
        </div>
        <div className="header-right">
         <img src={hostel_logo} alt="" />
         <h1>XYZ Hostel</h1>
        </div>
    </div>
  )
}

export default Header
