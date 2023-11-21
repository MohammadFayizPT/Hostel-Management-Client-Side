import React, { useEffect,useState } from 'react'
import './Features.css'
import axios from '../../axios'

const Features = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/home') // Make a GET request to your backend endpoint
      .then(response => {
        console.log(response.data);
        setData(response.data); // Set the retrieved data in state
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Handle any errors
      });
  }, []);

  return (
    <div className='features'>
      <div>
         <h2>Total Blocks</h2>
         <h2>{data.blocksCount}</h2>
       </div>
       <div>
         <h2>Total Rooms</h2>
         <h2>{data.roomsCount}</h2>
       </div>
       <div>
         <h2>No. of Students</h2>
         <h2>{data.studentsCount}</h2>
       </div>
       <div >
         <h2>No. of Staffs</h2>
         <h2>{data.staffsCount}</h2>
       </div>   
    </div>
  )
}

export default Features
