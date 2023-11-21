import React,{useEffect,useState} from 'react'
import './StudentDiv.css'
import axios from '../../axios'

const StudentDiv = () => {
    const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/students') 
      .then(response => {
        console.log(response.data);
        setStudents(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='studentdiv'>
    {students.map(e=>(
        <div key={e.Student_id} className='studentdiv-child'>
        <p>{e.Student_id}</p>
        <p>{e.Name}</p>
        <p>{e.Room_id}</p>
        <p>{e.Place}</p>
        <p>{e.Phone_no}</p>
     </div>
    ))}
    </div>
  )
}

export default StudentDiv
