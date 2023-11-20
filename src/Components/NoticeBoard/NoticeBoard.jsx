import React from 'react'
import './NoticeBoard.css'
import notice from '../Assets/notice.jpg'

const StudentForm = () => {
  return (
    <div className='noticeboard'>
      <div className="noticeboard-child">
         <img src={notice} alt="" />
      </div>
    </div>
  )
}

export default StudentForm
