import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home'
import LeftNavbar from './Components/LeftNavbar/LeftNavbar';
import Students from './Pages/Students';
import Staffs from './Pages/Staffs';
import Rooms from './Pages/Rooms';
import Complaints from './Pages/Complaints';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div className="App">
       <Header/>
       <div>
       <LeftNavbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/staffs' element={<Staffs/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/complaints' element={<Complaints/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
       </Routes>
       </div>
    </div>
  );
}

export default App;
