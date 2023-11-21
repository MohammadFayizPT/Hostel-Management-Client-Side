import React from 'react'
import './CSS/Rooms.css'
import { RoomDiv } from '../Components/RoomDiv/RoomDiv'

const Rooms = () => {
  return (
    <div className='rooms'>
       <h2>Check Room Details</h2>
       
       <div className='roomdiv-titles'>
          <h3>Room no.</h3>
          <h3>No. of Students</h3>
          <h3>Status</h3>
       </div>

        <RoomDiv/>
    </div>
  )
}

export default Rooms
