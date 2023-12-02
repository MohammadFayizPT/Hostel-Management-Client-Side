import React,{useState,useEffect} from 'react';
import './StaffDiv.css'; 
import axios from '../../axios';

const StaffDiv = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    axios.get('/staffs') 
      .then(response => {
        console.log(response.data);
        setStaffs(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
  return (
    <div className='staffdiv'>
      {staffs.map(e=>(
        <div className='staffdiv-child'>
        <p>{e.Staff_id}</p>
        <p>{e.Name}</p>
        <p>{e.Type}</p>
        <p>{e.Salary}</p>
     </div>
      ))}
    </div>
  );
};

export default StaffDiv;
