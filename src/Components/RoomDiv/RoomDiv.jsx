import React, { useEffect, useState } from 'react'
import './RoomDiv.css'
import axios from '../../axios'

export const RoomDiv = () => {
    const  [rooms, setRooms] = useState([]);
    useEffect(()=>{
        axios.get('/rooms') 
        .then(response => {
          console.log(response.data);
          setRooms(response.data); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },[])
  
  return (
    <div className='roomdiv'> 
     { rooms.map(e=>(
         <div key={e.Room_id} className="roomdiv-child">
         <p>{e.Room_id}</p>
         <p>{e.No_of_Students}</p>
         <p className={e.Is_Vacant ? 'notfull' : 'full'}>{e.Is_Vacant ? "Not Full" : "Full"}</p>
       </div>
     ))
        }
    </div>
  )
}
