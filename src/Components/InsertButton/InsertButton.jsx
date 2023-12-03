import React from 'react'
import './InsertButton.css'

const InsertButton = (props) => {
  return (
    <div className='insertbutton'>
       <button>Insert {props.content}</button>
    </div>
  )
}

export default InsertButton
