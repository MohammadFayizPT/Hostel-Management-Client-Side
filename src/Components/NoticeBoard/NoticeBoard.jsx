import React, { useState,useEffect } from 'react'
import './NoticeBoard.css'
import notice1 from '../Assets/Notices/notice1.jpg'
import notice2 from '../Assets/Notices/notice2.jpg'
import notice3 from '../Assets/Notices/notice3.jpeg'
import notice4 from '../Assets/Notices/notice4.jpeg'
import notice5 from '../Assets/Notices/notice5.jpg'
import notice6 from '../Assets/Notices/notice6.jpg'
import notice7 from '../Assets/Notices/notice7.jpeg'
import notice8 from '../Assets/Notices/notice8.webp'
import notice9 from '../Assets/Notices/notice9.jpeg'
import notice10 from '../Assets/Notices/notice10.jpg'
import notice11 from '../Assets/Notices/notice11.jpeg'
import notice12 from '../Assets/Notices/notice12.jpg'
import notice13 from '../Assets/Notices/notice13.avif'

const StudentForm = () => {
  const notices = [
    notice1,
    notice2,
    notice3,
    notice4,
    notice5,
    notice6,
    notice7,
    notice8,
    notice9,
    notice10,
    notice11,
    notice12,
    notice13
  ]

  const [noticeIndex,setNoticeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNoticeIndex((prevIndex) =>
        prevIndex === notices.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [notices.length]);

  return (
    <div className='noticeboard'>
      <div className="noticeboard-child">
         <img src= {notices[noticeIndex]} alt={`Slide ${noticeIndex}`} />
      </div>
    </div>
  )
}

export default StudentForm
